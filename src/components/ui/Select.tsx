import styles from "./Select.module.css";

export default function Select() {
	return (
		<select className='form-select-sm'>
			<option
				selected
				hidden
			>
				Filter by Region
			</option>
			<option value='Africa'>Africa</option>
			<option value='America'>America</option>
			<option value='Asia'>Asia</option>
			<option value='Europe'>Europe</option>
			<option value='Oceania'>Oceania</option>
		</select>
	);
}
