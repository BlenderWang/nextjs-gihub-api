import React from "react";
import styles from "./button-link.module.scss";
import Link from "next/link";

type ButtonLinkProps = {
	href: string;
	text: string;
	type: string;
	target?: string | undefined;
	external?: string | undefined;
};

type ButtonTypesProps = {
	primary: string;
	success: string;
	danger: string;
	dark: string;
	light: string;
};

const ButtonLink = ({
	href,
	text,
	type = "primary",
	target,
	external,
}: ButtonLinkProps) => {
	const types: ButtonTypesProps | any = {
		primary: "is-primary",
		success: "is-success",
		danger: "is-danger",
		dark: "is-dark",
		light: "is-light",
	};

	const buttonClass = `button ${types[type]}`;

	if (external) {
		return (
			<div className={styles.button}>
				<a className={buttonClass} target={target} href={href}>
					{text}
				</a>
			</div>
		);
	}

	return (
		<div className={styles.button}>
			<Link href={href}>
				<a className={buttonClass} target={target}>
					{text}
				</a>
			</Link>
		</div>
	);
};

export default ButtonLink;
