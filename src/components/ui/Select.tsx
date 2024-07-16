import styles from "./css.modules/Select.module.css";
import { useState } from "react";

export default function Select() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div></div>
		// px-4 py-3
		// <select className={styles.customeSelect}>
		// 	<option
		// 		selected
		// 		hidden
		// 	>
		// 		Filter by Region
		// 	</option>
		// 	<option value='Africa'>Africa</option>
		// 	<option value='America'>America</option>
		// 	<option value='Asia'>Asia</option>
		// 	<option value='Europe'>Europe</option>
		// 	<option value='Oceania'>Oceania</option>
		// </select>
	);
}
