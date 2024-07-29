import { useContext } from "react";
import styles from "./Pages.module.css";
import Header from "../components/ui/Header.tsx";
import { BackToHomePage } from "../components/ui/Buttons.tsx";
import { ThemeContext } from "../services/providers/themeContext.tsx";

export default function ErrorPage() {
	const themeContext = useContext(ThemeContext);

	return (
		<div
			className={`container-fluid px-0 ${
				themeContext?.islight ? styles.lightMode : styles.darkMode
			}`}
		>
			<Header />

			<div
				className={`pt-5 px-2 px-sm-5 text-center ${
					themeContext?.islight
						? styles.errorPageMain
						: styles.errorPageMainDark
				}`}
			>
				<h2 className='mb-5'>Something went wrong!</h2>
				<BackToHomePage from='errorPage' />
			</div>
		</div>
	);
}
