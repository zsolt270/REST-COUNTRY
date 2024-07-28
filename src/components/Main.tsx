import type { HomePageCountries } from "../services/api/apiTypes.ts";
import CountryCard from "./CountryCard.tsx";
import themes from "./css.modules/Main.module.css";
import Select from "./Select.tsx";
import SearchInput from "./SearchInput.tsx";

type MainProps = {
	mode: boolean;
	countries: HomePageCountries[];
	setCountries: () => void;
};

export default function Main({ mode, countries, setCountries }: MainProps) {
	return (
		<main
			className={`pt-4 pt-md-5 px-2 px-sm-5 ${
				mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
			}`}
		>
			<div className='d-block d-md-flex flex-column flex-md-row justify-content-between gap-3 mb-5'>
				<SearchInput setCountries={setCountries} />
				<Select setCountries={setCountries} />
			</div>

			<CountryCard countries={countries} />
		</main>
	);
}
