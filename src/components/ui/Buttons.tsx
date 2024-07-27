import styles from "./css.modules/Buttons.module.css";

type ButtonProps = {
	text: string;
	isLight: boolean;
};

export function TryAgainButton({ text, isLight }: ButtonProps) {
	return (
		<button
			className={`${isLight ? styles.lightButton : styles.darkButton} ${
				styles.btn
			}`}
		>
			{text}
		</button>
	);
}
