import styles from "./css.modules/Error.module.css";
import { TryAgainButton } from "./ui/Buttons.tsx";

type ThemeMode = {
	mode: boolean;
};

export default function Error({ mode }: ThemeMode) {
	return (
		<div
			className={`text-center pt-5 ${styles.errorDiv} ${
				mode ? `${styles.lightErrorDivBG}` : `${styles.darkErrorDivBG}`
			}`}
		>
			<h1>Something went wrong!</h1>
			<h2 className='mb-3'>Please try again.</h2>
			<TryAgainButton isLight={mode} />
		</div>
	);
}
