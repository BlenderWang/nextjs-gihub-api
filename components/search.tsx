import React from "react";
import TextInput from "./shared/text-input";
import Select from "./shared/select";
import LANGUAGES from "../constants/languages";
import styles from "./search.module.scss";

type SearchProps = {
	language: string;
	searchText: string;
	onSearchTextChange: Function;
	onLanguageChange: Function;
};

const Search = ({
	language,
	searchText,
	onSearchTextChange,
	onLanguageChange,
}: SearchProps) => {
	const languages = [{ value: "", label: "All" }, ...LANGUAGES];

	return (
		<div className={styles.search}>
			<TextInput
				label="Repo Search"
				value={searchText}
				onChange={(value: string) => onSearchTextChange(value)}
				placeholder={""}
				className={styles.searchInput}
			/>
			<Select
				className={styles.languageSelect}
				label="Language"
				value={language}
				/* @ts-ignore */
				options={languages}
				onChange={(value: string) => onLanguageChange(value)}
			/>
		</div>
	);
};

export default Search;
