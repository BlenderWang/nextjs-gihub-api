import React, { useEffect, useState } from "react";
import Image from "next/image";
import { searchRepos } from "../services/githubService";
import Search from "../components/search";
import RepoList, { RepoListProps } from "../components/repo-list";
import { getRandomWord } from "../utils/randomWord";
import styles from "./index.module.scss";

const Home = (props: any) => {
	// const [joke, setJoke] = useState("");

	const [searchText, setSearchText] = useState(props.searchText);
	const [language, setLanguage] = useState("");
	const [repos, setRepos] = useState(props.repos);
	const [loading, setLoading] = useState(false);

	const onSearchTextChange = (text: string) => {
		setSearchText(text);
		if (text) {
			loadRepos(text, language);
		}
	};

	const onLanguageChange = (language: string) => {
		setLanguage(language);
		loadRepos(searchText, language);
	};

	const loadRepos = async (searchText: string, language: string) => {
		setLoading(true);
		const res = await searchRepos(searchText, language);
		if (res && res.data) {
			setLoading(false);
			setRepos(res.data.items);
		}
	};

	/* useEffect(() => {
		getJoke();
	}, []);

	const getJoke = async () => {
		const res = await axios.get("https://api.chucknorris.io/jokes/random");

		setJoke(res.data.value);
	}; */

	return (
		<div className={styles.container}>
			<Image
				src="/img/study.svg"
				alt="placeholder-image"
				width="500px"
				height={"300px"}
			/>
			<Search
				searchText={searchText}
				language={language}
				onSearchTextChange={onSearchTextChange}
				onLanguageChange={onLanguageChange}
			/>
			{/* @ts-ignore */}
			<RepoList loading={loading} repos={repos} />
			{/* <h1>Hello from Next js</h1>
			<p>Description of the page</p>
			<p>Value CSR: {joke}</p>
			<p>Value SSR: {value}</p> */}
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const searchText = getRandomWord();
	/* @ts-ignore */
	const res = await searchRepos(searchText);

	return {
		props: {
			searchText: searchText,
			repos: res?.data.items,
		},
	};

	// const res = await axios.get("https://api.chucknorris.io/jokes/random");
	// return {
	// 	props: {
	// 		value: res.data.value,
	// 	},
	// };
};
