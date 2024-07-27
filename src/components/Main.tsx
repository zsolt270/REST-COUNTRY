import type { HomePageCountries } from "../services/api/apiTypes.ts";

import CountryCard from "./CountryCard.tsx";
import themes from "./Main.module.css";
import Select from "./Select.tsx";
import SearchInput from "./ui/SearchInput.tsx";

type ThemeMode = {
	mode: boolean;
	countries: HomePageCountries[];
};

export default function Main({ mode, countries }: ThemeMode) {
	console.log(countries);
	// console.log(countries[0]);
	// console.log(countries[0].name);

	const countryList = countries.map((country) => {
		return (
			<>
				<img
					src={`${country.flags.png}`}
					alt={`${country.flags.alt}`}
				/>
				<ul>
					<li>{country.name.common}</li>
					<li>{country.population}</li>
					<li>{country.region}</li>
					<li>{country.capital}</li>
				</ul>
			</>
		);
	});
	return (
		<main
			className={`pt-4 pt-md-5 px-2 px-sm-5 ${
				mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
			}`}
		>
			<div className='d-flex flex-column flex-md-row justify-content-between mb-5'>
				<SearchInput />
				<Select />
			</div>
			<div>
				<CountryCard />
				{countryList}
			</div>
		</main>
	);
}
