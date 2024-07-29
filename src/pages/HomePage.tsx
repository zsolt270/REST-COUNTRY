/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
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
	console.log(themeContext.islight);
	const [isLight, setIsLight] = useState(true); // ezt lehet contextként kéne átadni, mivel a select és az input + a kártyáknak is kell majd tudnia hogy light-e
	const location = useLocation();
	//ha light akkor a divnél styles.darkmode és
	// const [loading, setIsLoading] = useState(false);
	// const [error, setError] = useState();
	// const [countries, setCountries] = useState<HomePageCountries[]>([]);
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
					path={location.pathname}
					countries={countries}
					setCountries={setCountries}
				/>
			)}
		</div>
	);
	// console.log(countries);
	// console.log(error);
	// console.log(loading);
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
}
