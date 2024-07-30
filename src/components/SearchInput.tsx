import { useContext, useState } from "react";
import styles from "./css.modules/SearchInput.module.css";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import { fetchSearchedCountry } from "../services/api/fetchSearchedCountry.ts";
import { ThemeContext } from "../services/providers/themeContext.tsx";

type SelectProp = {
	setCountries: (countries: HomePageCountries[]) => void;
};

export default function SearchInput({ setCountries }: SelectProp) {
	const [inputValue, setInputValue] = useState("");
	const themeContext = useContext(ThemeContext);

	const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);

		const country = (await fetchSearchedCountry(
			`name/${value}`
		)) as HomePageCountries[];
		setCountries(country);
	};

	return (
		<div
			className={
				themeContext?.islight
					? styles.customInputGroupLight
					: styles.customInputGroupDark
			}
		>
			<i
				className={`bi bi-search ${
					themeContext?.islight ? styles.lightIcon : styles.darkIcon
				}`}
			></i>
			<input
				type='text'
				className={themeContext?.islight ? styles.inputLight : styles.inputDark}
				placeholder='Search for a country...'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	);
}
