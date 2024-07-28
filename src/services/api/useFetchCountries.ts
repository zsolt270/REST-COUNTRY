/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import type { HomePageCountries } from "./apiTypes.ts";

export const useFetchCountries = (url: string) => {
	const [loading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [countries, setCountries] = useState<HomePageCountries[]>([]);

	const abortControllerRef = useRef<AbortController | null>(null);
	console.log("before useeffect");
	useEffect(() => {
		console.log("valami nulla");
		const fetchCountries = async () => {
			console.log("valami first");
			abortControllerRef.current?.abort();
			abortControllerRef.current = new AbortController();
			setIsLoading(true);
			try {
				const response = await fetch(url, {
					signal: abortControllerRef.current?.signal,
				});
				const data = (await response.json()) as HomePageCountries[];
				console.log(data);
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
	}, [url]);

	console.log("valami second");
	return { countries, error, loading };
};
