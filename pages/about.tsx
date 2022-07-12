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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam semper diam at erat pulvinar, at pulvinar felis
					blandit. Vestibulum volutpat tellus diam, consequat gravida
					libero rhoncus ut. Morbi maximus, leo sit amet vehicula
					eleifend, nunc dui porta orci, quis semper odio felis ut
					quam.
				</p>
				<p>
					Suspendisse varius ligula in molestie lacinia. Maecenas
					varius eget ligula a sagittis. Pellentesque interdum, nisl
					nec interdum maximus, augue diam porttitor lorem, et
					sollicitudin felis neque sit amet erat. Maecenas imperdiet
					felis nisi, fringilla luctus felis hendrerit sit amet.
					Aenean vitae gravida diam, finibus dignissim turpis. Sed
					eget varius ligula, at volutpat tortor.
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
