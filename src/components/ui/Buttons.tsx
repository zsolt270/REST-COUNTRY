import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import styles from "./css.modules/Buttons.module.css";
import { ThemeContext } from "../../services/providers/themeContext";

type ButtonProps = {
	// isLight: boolean;
	from?: "errorPage" | "detailsPage";
};
// { isLight }: ButtonProps
export function TryAgainButton() {
	const navigation = useNavigate();
	const themeContext = useContext(ThemeContext);

	return (
		<button
			className={`${
				themeContext?.islight ? styles.lightButton : styles.darkButton
			} ${styles.btn}`}
			onClick={() => {
				navigation(0);
			}}
		>
			Try again!
		</button>
	);
}
export function BackToHomePage({ from }: ButtonProps) {
	const themeContext = useContext(ThemeContext);

	return (
		<Link
			className={`${
				themeContext?.islight ? styles.lightButton : styles.darkButton
			} ${styles.backBtn}`}
			to={"/"}
		>
			<i className='bi bi-arrow-left fs-4 ps-0'></i>
			<span className=''>{from === "errorPage" ? "HomePage" : "Back"}</span>
		</Link>
	);
}
