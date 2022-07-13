import React from "react";
import Image from "next/image";
import { getOrganization } from "../services/githubService";
import styles from "./about.module.scss";
import ButtonLink from "../components/shared/button-link";

export type OrgRepoProps = {
	repo: {
		id: number;
		login: string;
		url: string;
		avatar_url: string;
		description: string | null;
	};
};

const About = ({ repo }: OrgRepoProps) => {
	return (
		<div className={""}>
			<div className="tile is-child">
				<p className="title">About this project</p>
				<p>
					This is a web app made with Nextjs, Bulma CSS and Typescript
					and deployed on Vercel. It has also incorporated GitHub API
					for search functionality based on username, repository
					and/or organization and etc.
				</p>
				<p>
					The purpose of this project is to practice working with API
					as well as strengthen my Javascript skills together with
					Typescript. In the meantime, I would also like to explore
					more CSS framework. In this case, Bulma CSS has been
					implemented.
				</p>
			</div>

			<div className="tile is-parent">
				<article className="tile is-child">
					<p className="subtitle">Showcase</p>
				</article>
			</div>

			<div className={`tile is-parent ${styles.showcase}`}>
				{/* @ts-ignore */}
				{repo.map((rep) => {
					const repoUrl = "https://" + rep.url.substring(12);

					return (
						<article key={rep.id} className="tile is-child box">
							<figure className="image">
								<Image
									className="is-rounded"
									src={rep.avatar_url}
									alt="avatar"
									width={40}
									height={40}
								/>
							</figure>
							<span>{rep.login}</span>
							<p className={styles.repId}>ID: {rep.id}</p>

							<ButtonLink
								href={repoUrl}
								text="View on Github"
								type="dark"
								target="_blank"
								external=""
							/>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default About;

export const getServerSideProps = async () => {
	const res = await getOrganization();

	return {
		props: { repo: res.data },
	};
};
