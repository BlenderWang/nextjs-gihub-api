import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./user-avatar.module.scss";

import { UserProps } from "../global/types";

const UserAvatar = ({ user }: UserProps) => {
	return (
		<div className={styles.user}>
			<figure className={`${styles.avatar} image`}>
				<Image
					className="is-rounded"
					src={user.avatar_url}
					alt="avatar"
					width={40}
					height={40}
				/>
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
