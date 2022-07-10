import React from "react";
import Image from "next/image";
import RepoListItem from "./repo-list-item";

import styles from "./repo-list.module.scss";

type RepoProps = {
	id: number | string;
	name: string;
	description: string;
};

export type RepoListProps = {
	repos: RepoProps[];
	loading: boolean;
};

const RepoList = ({ repos, loading }: RepoListProps) => {
	if (loading) {
		return (
			<Image
				className={styles.loader}
				src="/img/loader.gif"
				alt="loader"
				width={300}
				height={250}
			/>
		);
	}

	if (!repos || repos.length === 0) {
		return <span className={styles.message}>No repositories found.</span>;
	}

	return (
		<div className={styles.repoList}>
			{repos.map((repo) => (
				<RepoListItem key={repo.id} repo={repo}></RepoListItem>
			))}
		</div>
	);
};

export default RepoList;
