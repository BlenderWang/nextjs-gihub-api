import { createContext, ReactNode, useContext, useState } from "react";

type AppProviderProps = {
	children: ReactNode;
};

type AppContext = {
	searchText: string;
	searchTextChange: (text: string) => void;
	language: string;
	languageChange: (text: string) => void;
};

const AppContext = createContext({} as AppContext);

export const useSearchContext = () => {
	return useContext(AppContext);
};

export function AppProvider({ children }: AppProviderProps) {
	const [searchText, setSearchText] = useState("");
	const [language, setLanguage] = useState("All");

	const searchTextChange = (text: string) => {
		setSearchText(text);
	};

	const languageChange = (language: string) => {
		setLanguage(language);
	};

	return (
		<AppContext.Provider
			value={{ searchText, searchTextChange, language, languageChange }}
		>
			{children}
		</AppContext.Provider>
	);
}
