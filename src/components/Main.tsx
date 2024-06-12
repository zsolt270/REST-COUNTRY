import themes from "./Main.module.css";
import SearchInput from "./ui/SearchInput.tsx";
import Select from "./ui/Select.tsx";

type ThemeMode = {
	mode: boolean;
};

export default function Main({ mode }: ThemeMode) {
	return (
		<main
			className={`pt-4 px-2 px-sm-5 ${
				mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
			}`}
		>
			<div className='d-flex justify-content-between'>
				<SearchInput />
				<Select />
			</div>
		</main>
	);
}
