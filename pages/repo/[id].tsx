import React from "react";
import { getRepo } from "../../services/githubService";
import styles from "./repo.module.scss";
import ButtonLink from "../../components/shared/button-link";
import UserAvatar from "../../components/user-avatar";

type RepoProps = {
	repo: {
		name: string;
		owner: string;
		description: string;
		language: string;
		html_url: string;
	};
};

export type QueryProps = {
	query: {
		id: number | string;
	};
};

const Repo = ({ repo }: RepoProps) => {
	return (
		<div>
			<ButtonLink
				href="/"
				text="Back"
				target={""}
				external={""}
				type={""}
			/>

			<div className={styles.header}>
				<span>{repo.name}</span>
			</div>

			{/* @ts-ignore */}
			<UserAvatar user={repo.owner}></UserAvatar>
			<div className={styles.description}>{repo.description}</div>
			<div className={styles.language}>{repo.language}</div>

			<ButtonLink
				href={repo.html_url}
				text="View on Github"
				type="dark"
				target="_blank"
				external=""
			/>
		</div>
	);
};

export const getServerSideProps = async ({ query }: QueryProps) => {
	const res = await getRepo(query.id);
	return {
		props: { repo: res.data },
	};
};

export default Repo;
