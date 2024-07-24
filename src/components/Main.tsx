import CountryCard from "./CountryCard.tsx";
import themes from "./Main.module.css";
import Select from "./Select.tsx";
import SearchInput from "./ui/SearchInput.tsx";
// import Select from "./ui/Select.tsx";

type ThemeMode = {
	mode: boolean;
};

export default function Main({ mode }: ThemeMode) {
	return (
		<main
			className={`pt-4 pt-md-5 px-2 px-sm-5 ${
				mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
			}`}
		>
			<div className='d-flex flex-column flex-md-row justify-content-between'>
				<SearchInput />
				{/* <Select /> */}
				<Select />
			</div>
			<div>
				<CountryCard />
			</div>
		</main>
	);
}
