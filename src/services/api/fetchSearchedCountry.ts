/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HomePageCountries } from "./apiTypes.ts";

export const fetchSearchedCountry = async (url: string) => {
	if (url == "name/") {
		url = "all";
	}
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/${url}?fields=flags,name,population,region,capital`
		);
		const data = (await response.json()) as HomePageCountries[];
		return data;
	} catch (error: any) {
		console.log(error);
	}
};
