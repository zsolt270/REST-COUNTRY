/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetchCountries } from "../hooks/useFetchCountries.ts";
import type { DetailsPageCountry } from "../services/api/apiTypes.ts";
import Header from "../components/ui/Header.tsx";
import Main from "../components/Main.tsx";
import Error from "../components/Error.tsx";
import Loading from "../components/Loading.tsx";
import styles from "./Pages.module.css";

export default function DetailsPage() {
	const [isLight, setIsLight] = useState(true);
	const location = useLocation();
	const path = location.pathname.split("/");
	const {
		countries,
		setCountries,
		error,
		loading,
	}: DetailsPageCountry[] | any | boolean = useFetchCountries(
		`name/${path[2]}?fullText=true&fields=name,tld,currencies,capital,region,subregion,languages,borders,population,flags`
	);
	if (error) {
		return (
			<div
				className={`container-fluid px-0 ${
					isLight ? styles.lightMode : styles.darkMode
				}`}
			>
				<Header
					setIsLight={setIsLight}
					isLight={isLight}
				/>
				<Error mode={isLight} />
			</div>
		);
	}

	return (
		<div
			className={`container-fluid px-0 ${
				isLight ? styles.lightMode : styles.darkMode
			}`}
		>
			<Header
				setIsLight={setIsLight}
				isLight={isLight}
			/>
			{loading ? (
				<Loading mode={isLight} />
			) : (
				<Main
					mode={isLight}
					path={path[1]}
					countries={countries}
					setCountries={setCountries}
				/>
			)}
		</div>
	);
}
