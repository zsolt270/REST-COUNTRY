import type { HomePageCountries } from "../services/api/apiTypes.ts";
import { useState } from "react";
import styles from "./css.modules/Select.module.css";
import { fetchSelectedRegion } from "../services/api/fetchSelectedRegion.ts";

type Continents = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

type SelectProp = {
	setCountries: (countries: HomePageCountries[]) => void;
};

export default function Select({ setCountries }: SelectProp) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectValue, setSelectValue] = useState("Filter by Region");

	const openSelect = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectQuery = async (continent: Continents) => {
		setSelectValue(continent);
		setIsOpen(false);

		const filteredCountries = (await fetchSelectedRegion(
			continent
		)) as HomePageCountries[];
		setCountries(filteredCountries);
	};

	return (
		<div>
			<div
				className={styles.select}
				onClick={openSelect}
			>
				<p>{selectValue}</p>
				<i className='bi bi-chevron-down'></i>
			</div>
			{isOpen ? (
				<ul className={styles.options}>
					<li
						onClick={() => {
							handleSelectQuery("Africa");
						}}
					>
						Africa
					</li>
					<li
						onClick={() => {
							handleSelectQuery("Americas");
						}}
					>
						America
					</li>
					<li
						onClick={() => {
							handleSelectQuery("Asia");
						}}
					>
						Asia
					</li>
					<li
						onClick={() => {
							handleSelectQuery("Europe");
						}}
					>
						Europe
					</li>
					<li
						onClick={() => {
							handleSelectQuery("Oceania");
						}}
					>
						Oceania
					</li>
				</ul>
			) : null}
		</div>
	);
}
