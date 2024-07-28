import { Fragment } from "react/jsx-runtime";
import type { HomePageCountries } from "../services/api/apiTypes.ts";

import CountryCard from "./CountryCard.tsx";
import themes from "./css.modules/Main.module.css";
import Select from "./Select.tsx";
import SearchInput from "./ui/SearchInput.tsx";

type ThemeMode = {
	mode: boolean;
	countries: HomePageCountries[];
	setCountries: () => void;
};

export default function Main({ mode, countries, setCountries }: ThemeMode) {
	const countryList = countries.map((country) => {
		return (
			<Fragment key={country.name.common}>
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
			</Fragment>
		);
	});
	return (
		<main
			className={`pt-4 pt-md-5 px-2 px-sm-5 ${
				mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
			}`}
		>
			<div className='d-block d-md-flex flex-column flex-md-row justify-content-between gap-3 mb-5'>
				<SearchInput />
				<Select setCountries={setCountries} />
			</div>
			<div>
				<CountryCard />
				{countryList}
			</div>
		</main>
	);
}
