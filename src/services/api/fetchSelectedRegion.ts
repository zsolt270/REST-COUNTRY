/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HomePageCountries } from "./apiTypes.ts";

export const fetchSelectedRegion = async (region: string) => {
	try {
		const response = await fetch(
			`https://restcountries.com/v3.1/region/${region}?fields=flags,name,population,region,capital`
		);
		const data = (await response.json()) as HomePageCountries[];
		return data;
	} catch (error: any) {
		console.log(error);
	}
};
