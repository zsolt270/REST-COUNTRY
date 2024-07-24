import { useState } from "react";
import styles from "./Select.module.css";

export default function Select() {
	const [isOpen, setIsOpen] = useState(false);
	const openSelect = () => {
		setIsOpen(!isOpen);
	};

	const handleSelectQuery = (continent: string) => {
		console.log(continent);
	};

	return (
		<div>
			<div
				className={styles.select}
				onClick={openSelect}
			>
				<p>Filter by Region</p>
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
							handleSelectQuery("America");
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
