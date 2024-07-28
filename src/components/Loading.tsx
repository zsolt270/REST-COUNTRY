import styles from "./css.modules/Loading.module.css";

type ThemeMode = {
	mode: boolean;
};

export default function Loading({ mode }: ThemeMode) {
	return (
		<div
			className={`text-center pt-5 ${styles.loadingDiv} ${
				mode ? `${styles.lightLoadingDivBG}` : `${styles.darkLoadingDivBG}`
			}`}
		>
			<h1>The content is still loading</h1>
			<h2 className={styles.dots}>Please wait</h2>
		</div>
	);
}
