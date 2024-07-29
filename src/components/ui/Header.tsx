import { useContext } from "react";
import { ThemeContext } from "../../services/providers/themeContext";
import style from "./css.modules/Header.module.css";

export default function Header() {
	const themeContext = useContext(ThemeContext);
	return (
		<header
			className={`py-3 px-2 px-sm-5  d-flex justify-content-between border-2 border-bottom ${
				themeContext?.islight ? "" : "border-dark"
			}`}
		>
			<p className={`fw-bold mb-0 ${style.fsSmall}`}>Where in the world?</p>
			<div
				className='d-flex gap-1 gap-sm-2 align-items-center'
				onClick={() => {
					themeContext.setIsLight(!themeContext?.islight);
				}}
			>
				<i
					className={`fs-6 bi ${
						themeContext?.islight ? `bi-moon ` : `bi-moon-fill text-white`
					}`}
				></i>
				<p className='fw-bolder fs-6 mb-0'>Dark Mode</p>
			</div>
		</header>
	);
}
