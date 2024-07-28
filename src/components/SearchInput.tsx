import { useState } from "react";
import styles from "./css.modules/SearchInput.module.css";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import { fetchSearchedCountry } from "../services/api/fetchSearchedCountry.ts";

type SelectProp = {
	setCountries: (countries: HomePageCountries[]) => void;
};

export default function SearchInput({ setCountries }: SelectProp) {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = async (e) => {
		const value = e.target.value;
		setInputValue(value);

		const country = (await fetchSearchedCountry(
			`name/${value}`
		)) as HomePageCountries[];
		setCountries(country);
	};

	return (
		<div className={styles.customInputGroup}>
			<i className='bi bi-search'></i>
			<input
				type='text'
				className={styles.input}
				placeholder='Search for a country...'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	);
}
