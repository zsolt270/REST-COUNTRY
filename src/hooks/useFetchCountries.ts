/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import type { HomePageCountries } from "../services/api/apiTypes.ts";

export const useFetchCountries = (urlParam: string) => {
	const [loading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const [countries, setCountries] = useState<HomePageCountries[]>([]);

	const abortControllerRef = useRef<AbortController | null>(null);
	useEffect(() => {
		const fetchCountries = async () => {
			abortControllerRef.current?.abort();
			abortControllerRef.current = new AbortController();
			setIsLoading(true);
			try {
				const response = await fetch(
					`https://restcountries.com/v3.1/${urlParam}?fields=flags,name,population,region,capital`,
					{
						signal: abortControllerRef.current?.signal,
					}
				);
				const data = (await response.json()) as HomePageCountries[];
				setCountries(data);
			} catch (error: any) {
				if (error.name === "AbortError") {
					console.log(error);
					return;
				}
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCountries();
	}, [urlParam]);

	return { countries, setCountries, error, loading };
};
