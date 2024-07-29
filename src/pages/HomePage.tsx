/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { useFetchCountries } from "../hooks/useFetchCountries.ts";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../services/providers/themeContext.tsx";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import styles from "./Pages.module.css";
import Header from "../components/ui/Header.tsx";
import Main from "../components/Main.tsx";
import Loading from "../components/Loading.tsx";
import Error from "../components/Error.tsx";

export default function HomePage() {
	const themeContext = useContext(ThemeContext);

	const location = useLocation();

	const {
		countries,
		setCountries,
		error,
		loading,
	}: HomePageCountries[] | any | boolean = useFetchCountries(
		"all?fields=flags,name,population,region,capital"
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
					path={location.pathname}
					countries={countries}
					setCountries={setCountries}
				/>
			)}
		</div>
	);
}
