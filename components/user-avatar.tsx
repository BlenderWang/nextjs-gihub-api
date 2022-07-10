import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./user-avatar.module.scss";

interface UserProps {
	user: {
		avatar_url: string;
		login: string;
	};
}

const UserAvatar = ({ user }: UserProps) => {
	return (
		<div className={styles.user}>
			<figure className={`${styles.avatar} image`}>
				{/* eslint-disable */}
				<img
					className="is-rounded"
					src={user.avatar_url}
					alt="avatar"
				/>
				{/* <Image
					className="is-rounded"
					src={user.avatar_url}
					alt="avatar"
					width={40}
					height={40}
				/> */}
			</figure>
			<div className={styles.userLink}>
				<Link href="/profile/[id]" as={`/profile/${user.login}`}>
					<a>{user.login}</a>
				</Link>
			</div>
		</div>
	);
};

export default UserAvatar;
