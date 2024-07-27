import { useNavigate } from "react-router-dom";
import styles from "./css.modules/Buttons.module.css";

type ButtonProps = {
	isLight: boolean;
};

export function TryAgainButton({ isLight }: ButtonProps) {
	const navigate = useNavigate();

	const refreshPage = () => {
		navigate(0);
	};
	return (
		<button
			className={`${isLight ? styles.lightButton : styles.darkButton} ${
				styles.btn
			}`}
			onClick={refreshPage}
		>
			Try again!
		</button>
	);
}
