import { useNavigate } from "react-router-dom";
import styles from "./css.modules/Buttons.module.css";

type ButtonProps = {
	text: string;
	isLight: boolean;
};

export function TryAgainButton({ text, isLight }: ButtonProps) {
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
			{text}
		</button>
	);
}
