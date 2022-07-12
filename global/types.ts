export type BaseProps = {
	searchText: string;
	language: string;
	repos: any;
	loading: boolean;
};

export type SharedType = {
	label: string;
	value: string;
	onChange: Function;
	className: string;
};

export type ListItemProps = {
	id: number | string;
	name: string;
	description: string;
};

export type RepoProps = {
	repo: {
		name: string;
		owner: string;
		description: string;
		language: string;
		html_url: string;
	};
};

export type RepoListItemProps = {
	repo: {
		id: number | string;
		name: string;
		description: string;
		language?: string;
		stargazers_count?: number | string;
		forks_count?: number;
		owner?: string;
	};
};

export interface UserProps {
	user:
		| {
				avatar_url: string;
				login: string;
		  }
		| any;
}

export type QueryProps = {
	query: {
		id: string;
	};
};
