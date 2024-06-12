import styles from "./SearchInput.module.css";

export default function SearchInput() {
	return (
		<div className={styles.customInputGroup}>
			<i className='bi bi-search'></i>
			<input
				type='text'
				className={styles.input}
				placeholder='Search for a country...'
			/>
		</div>
	);
}
