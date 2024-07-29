import { useState } from "react";
import styles from "./Pages.module.css";
import Header from "../components/ui/Header.tsx";
import { BackToHomePage } from "../components/ui/Buttons.tsx";

export default function ErrorPage() {
	const [isLight, setIsLight] = useState(true);
	return (
		<div
			className={`container-fluid px-0 ${
				isLight ? styles.lightMode : styles.darkMode
			}`}
		>
			<Header
				setIsLight={setIsLight}
				isLight={isLight}
			/>

			<div
				className={`pt-5 px-2 px-sm-5 text-center ${
					isLight ? styles.errorPageMain : styles.errorPageMainDark
				}`}
			>
				<h2 className='mb-5'>Something went wrong!</h2>
				<BackToHomePage
					isLight={isLight}
					from='errorPage'
				/>
			</div>
		</div>
	);
}
