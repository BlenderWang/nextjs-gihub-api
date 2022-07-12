import React from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaCode } from "react-icons/fa";
import UserAvatar from "./user-avatar";
import styles from "./repo-list-item.module.scss";

import { RepoListItemProps } from "../global/types";

const RepoListItem = ({ repo }: RepoListItemProps) => {
	const cutDescription = (description: string) => {
		if (description && description.length > 100) {
			return description.slice(0, 100) + "...";
		}

		return description;
	};

	return (
		<div className={`${styles.repoListItem} box`}>
			<div className={styles.repoName}>
				<Link href="/repo/[id]" as={`/repo/${repo.id}`}>
					<a>{repo.name}</a>
				</Link>
			</div>

			{/* @ts-ignore */}
			<UserAvatar user={repo.owner} />

			<p className={styles.description}>
				{cutDescription(repo.description)}
			</p>

			<div className={styles.footer}>
				<div className={styles.counters}>
					<div className={styles.counter}>
						<FaStar />
						<span>{repo.stargazers_count}</span>
					</div>
					<div className={styles.counter}>
						<FaCodeBranch />
						<span>{repo.forks_count}</span>
					</div>
				</div>
				<div className={styles.language}>
					<span>{repo.language}</span>
				</div>
			</div>
		</div>
	);
};

export default RepoListItem;
