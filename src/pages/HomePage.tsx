/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef, useState } from "react";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import styles from "./Pages.module.css";
import Header from "../components/ui/Header.tsx";
import Main from "../components/Main.tsx";
import Loading from "../components/Loading.tsx";
import Error from "../components/Error.tsx";
import { useFetchCountries } from "../services/api/useFetchCountries.ts";
//itt az api request, talán elmenteni egy tömbbe és majd abból keresni a filterrel az input értékek meg a select opciók szerint
//ide kintre majd state-t hogy darkmode-e v sem és pl contexttel levinni minden elementnek

// import { fetchCountries } from "../services/api/fetchCountries.ts";

export default function HomePage() {
	const [isLight, setIsLight] = useState(true); // ezt lehet contextként kéne átadni, mivel a select és az input + a kártyáknak is kell majd tudnia hogy light-e
	//ha light akkor a divnél styles.darkmode és
	// const [loading, setIsLoading] = useState(false);
	// const [error, setError] = useState();
	// const [countries, setCountries] = useState<HomePageCountries[]>([]);
	const { countries, error, loading }: HomePageCountries | any | boolean =
		useFetchCountries(
			"https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
		);

	console.log(countries);
	console.log(error);
	console.log(loading);
	// const abortControllerRef = useRef<AbortController | null>(null);

	// useEffect(() => {
	// 	const fetchCountries = async () => {
	// 		abortControllerRef.current?.abort();
	// 		abortControllerRef.current = new AbortController();
	// 		setIsLoading(true);
	// 		try {
	// 			const response = await fetch(
	// 				"https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital",
	// 				{ signal: abortControllerRef.current?.signal }
	// 			);
	// 			const data = (await response.json()) as HomePageCountries[];
	// 			setCountries(data);
	// 		} catch (error: any) {
	// 			if (error.name === "AbortError") {
	// 				console.log(error);
	// 				return;
	// 			}
	// 			setError(error);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	};
	// 	// fetchCountries(abortControllerRef, setIsLoading, setCountries, setError);
	// 	fetchCountries();
	// }, []);
	if (error) {
		return (
			<div
				className={`container-fluid px-0 ${
					isLight ? styles.lightMode : styles.darkMode
				}`}
			>
				{/* ide a context provider */}
				<Header />
				<Error mode={isLight} />
				{/* ide a context provider */}
			</div>
		);
	}
	return (
		<div
			className={`container-fluid px-0 ${
				isLight ? styles.lightMode : styles.darkMode
			}`}
		>
			{/* ide a context provider */}
			<Header />

			{loading ? (
				<Loading mode={isLight} />
			) : (
				<Main
					mode={isLight}
					countries={countries}
				/>
			)}
			{/* ide a context provider */}
		</div>
	);
}
