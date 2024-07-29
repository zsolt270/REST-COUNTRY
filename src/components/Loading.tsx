import { useContext } from "react";
import { ThemeContext } from "../services/providers/themeContext";
import styles from "./css.modules/Loading.module.css";

export default function Loading() {
	const themeContext = useContext(ThemeContext);

	return (
		<div
			className={`text-center pt-5  ${
				themeContext?.islight
					? `${styles.lightLoadingDivBG}`
					: `${styles.darkLoadingDivBG}`
			}`}
		>
			<h1>The content is still loading</h1>
			<h2 className={styles.dots}>Please wait</h2>
		</div>
	);
}
