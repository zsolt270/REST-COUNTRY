/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useFetchCountries } from "../hooks/useFetchCountries.ts";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import Header from "../components/ui/Header.tsx";
import Main from "../components/Main.tsx";
import Error from "../components/Error.tsx";
import Loading from "../components/Loading.tsx";
import styles from "./Pages.module.css";
import { ThemeContext } from "../services/providers/themeContext.tsx";

export default function DetailsPage() {
	const themeContext = useContext(ThemeContext);

	const location = useLocation();
	const path = location.pathname.split("/");
	const {
		countries,
		setCountries,
		error,
		loading,
	}: HomePageCountries[] | any | boolean = useFetchCountries(
		`name/${path[2]}?fullText=true&fields=name,tld,currencies,capital,region,subregion,languages,borders,population,flags`
	);
	if (error) {
		return (
			<div
				className={`container-fluid px-0 ${
					themeContext?.islight ? styles.lightMode : styles.darkMode
				}`}
			>
				<Header />
				<Error />
			</div>
		);
	}

	return (
		<div
			className={`container-fluid px-0 ${
				themeContext?.islight ? styles.lightMode : styles.darkMode
			}`}
		>
			<Header />
			{loading ? (
				<Loading />
			) : (
				<Main
					path={path[2]}
					countries={countries}
					setCountries={setCountries}
				/>
			)}
		</div>
	);
}
