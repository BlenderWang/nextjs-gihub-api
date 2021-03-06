import React from "react";
import { getProfile } from "../../services/githubService";
import styles from "./profile.module.scss";
import ButtonLink from "../../components/shared/button-link";
import { QueryProps } from "../../global/types";

type ProfileProps = {
	profile: {
		name: string;
		bio: string;
		email: string;
		blog: string | string[] | boolean;
		location: string;
		followers: number;
		following: boolean;
		html_url: string;
	};
};

const Profile = ({ profile }: ProfileProps) => {
	return (
		<div>
			<ButtonLink href="/" text="Back" type={""} />

			<h3 className="is-size-3">{profile.name}</h3>
			{profile.bio && <div className={styles.text}>{profile.bio}</div>}
			{profile.email && (
				<div className={styles.text}>{profile.email}</div>
			)}
			{profile.blog && <div className={styles.text}>{profile.blog}</div>}
			{profile.location && (
				<div className={styles.text}>{profile.location}</div>
			)}

			<div className={styles.counters}>
				<div>Followers: {profile.followers}</div>
				<div>Following: {profile.following}</div>
			</div>

			<ButtonLink
				href={profile.html_url}
				text="View on Github"
				type="dark"
				target="_blank"
				external=""
			/>
		</div>
	);
};

export const getServerSideProps = async ({ query }: QueryProps) => {
	const res = await getProfile(query.id);
	return {
		props: { profile: res.data },
	};
};

export default Profile;
