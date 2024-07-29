import { Link, useNavigate } from "react-router-dom";
import styles from "./css.modules/Buttons.module.css";

type ButtonProps = {
	isLight: boolean;
	from?: "errorPage" | "detailsPage";
};

export function TryAgainButton({ isLight }: ButtonProps) {
	const navigation = useNavigate();
	return (
		<button
			className={`${isLight ? styles.lightButton : styles.darkButton} ${
				styles.btn
			}`}
			onClick={() => {
				navigation(0);
			}}
		>
			Try again!
		</button>
	);
}
export function BackToHomePage({ isLight, from }: ButtonProps) {
	return (
		<Link
			className={`${isLight ? styles.lightButton : styles.darkButton} ${
				styles.backBtn
			}`}
			to={"/"}
		>
			<i className='bi bi-arrow-left fs-4 ps-0'></i>
			<span className=''>{from === "errorPage" ? "HomePage" : "Back"}</span>
		</Link>
	);
}
