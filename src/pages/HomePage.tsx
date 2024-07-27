import { useEffect, useState } from "react";
import styles from "./Pages.module.css";
import Header from "../components/ui/Header.tsx";
import Main from "../components/Main.tsx";
import Loading from "../components/Loading.tsx";
import Error from "../components/Error.tsx";
//itt az api request, talán elmenteni egy tömbbe és majd abból keresni a filterrel az input értékek meg a select opciók szerint
//ide kintre majd state-t hogy darkmode-e v sem és pl contexttel levinni minden elementnek

type HomePageCountries = {
	flag: string;
	name: string;
	population: number;
	Region: string;
	Casspital: string;
};

export default function HomePage() {
	const [isLight, setIsLight] = useState(true); // ezt lehet contextként kéne átadni, mivel a select és az input + a kártyáknak is kell majd tudnia hogy light-e
	//ha light akkor a divnél styles.darkmode és
	const [loading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [countries, setCountries] = useState<HomePageCountries[]>([]);
	useEffect(() => {
		const fetchCountries = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					"https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
				);
				const data = (await response.json()) as HomePageCountries[];
				setCountries(data);
			} catch (error) {
				console.log(error);
				setError(true);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCountries();
	}, []);
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

			{loading ? <Loading mode={isLight} /> : <Main mode={isLight} />}
			{/* ide a context provider */}
		</div>
	);
}
