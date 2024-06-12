import { useState } from "react";
import styles from "./Pages.module.css";
import Navbar from "../components/ui/Header.tsx";
import Main from "../components/Main.tsx";
//itt az api request, talán elmenteni egy tömbbe és majd abból keresni a filterrel az input értékek meg a select opciók szerint
//ide kintre majd state-t hogy darkmode-e v sem és pl contexttel levinni minden elementnek

export default function HomePage() {
	const [isLight, setIsLight] = useState(true);
	//ha light akkor a divnél styles.darkmode és
	return (
		<div
			className={`container-fluid px-0 ${
				isLight ? styles.lightMode : styles.darkMode
			}`}
		>
			<Navbar />
			<Main mode={isLight} />
		</div>
	);
}
