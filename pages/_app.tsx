import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../scss/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Github API with Bulma CSS</title>
			</Head>
			<Navbar></Navbar>
			<div className="page">
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
