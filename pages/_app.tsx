import type { AppProps } from "next/app";
import { AppProvider } from "../context/AppContext";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../scss/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<div>
				<Head>
					<title>Github API with Bulma CSS</title>
				</Head>
				<Navbar></Navbar>
				<div className="page">
					<Component {...pageProps} />
				</div>
			</div>
		</AppProvider>
	);
}

export default MyApp;
