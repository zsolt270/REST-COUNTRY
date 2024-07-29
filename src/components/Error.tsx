import { useContext } from "react";
import { ThemeContext } from "../services/providers/themeContext.tsx";
import styles from "./css.modules/Error.module.css";
import { TryAgainButton } from "./ui/Buttons.tsx";

export default function Error() {
	const themeContext = useContext(ThemeContext);
	return (
		<div
			className={`text-center pt-5 ${styles.errorDiv} ${
				themeContext?.islight
					? `${styles.lightErrorDivBG}`
					: `${styles.darkErrorDivBG}`
			}`}
		>
			<h1>Something went wrong!</h1>
			<h2 className='mb-3'>Please try again.</h2>
			<TryAgainButton />
		</div>
	);
}
