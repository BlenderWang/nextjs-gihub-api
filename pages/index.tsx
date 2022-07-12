import React, { useState } from "react";
import Image from "next/image";
import { searchRepos } from "../services/githubService";
import Search from "../components/search";
import RepoList from "../components/repo-list";
import { getRandomWord } from "../utils/randomWord";
import styles from "./index.module.scss";
import { BaseProps } from "../global/types";

const Home = (props: BaseProps) => {
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
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const searchText = getRandomWord();
	const res: any = await searchRepos(searchText);

	return {
		props: {
			searchText: searchText,
			repos: res.data.items,
		},
	};
};
