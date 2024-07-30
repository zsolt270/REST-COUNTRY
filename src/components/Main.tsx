import type { HomePageCountries } from "../services/api/apiTypes.ts";
import { BackToHomePage } from "../components/ui/Buttons.tsx";
import CountryCard from "./CountryCard.tsx";
import themes from "./css.modules/Main.module.css";
import Select from "./Select.tsx";
import SearchInput from "./SearchInput.tsx";
import { ThemeContext } from "../services/providers/themeContext.tsx";
import { useContext } from "react";

type MainProps = {
	path: string;
	countries: HomePageCountries[];
	setCountries?: () => void;
};

export default function Main({ path, countries, setCountries }: MainProps) {
	const themeContext = useContext(ThemeContext);

	if (path == "/REST-COUNTRY/") {
		return (
			<main
				className={`pt-4 pt-md-5 px-2 px-sm-5 ${
					themeContext?.islight
						? `${themes.lightModeElements}`
						: `${themes.darkModeElements}`
				}`}
			>
				<div className='d-block d-md-flex flex-column flex-md-row justify-content-between gap-3 mb-5'>
					<SearchInput setCountries={setCountries as () => void} />
					<Select setCountries={setCountries as () => void} />
				</div>

				<CountryCard countries={countries} />
			</main>
		);
	} else if (path == "/REST-COUNTRY/country") {
		try {
			const nativeNames = Object.keys(countries[0].name.nativeName).map(
				(nativeKey) => {
					return countries[0].name.nativeName[nativeKey].common + ", ";
				}
			);

			const tlds = countries[0].tld?.map((countryTld: string) => {
				return countryTld + " | ";
			});
			const currencies = Object.keys(countries[0].currencies!).map(
				(currency) => {
					return countries[0].currencies![currency].name + ", ";
				}
			);
			const languages = Object.keys(countries[0].languages!).map((language) => {
				return countries[0].languages![language] + ", ";
			});
			const borderCountries = countries[0].borders?.map(
				(borderCountry: string) => {
					return (
						<div
							key={borderCountry}
							className='col col-xxl-2'
						>
							<p
								className={`${
									themeContext?.islight
										? themes.lightBorderCountry
										: themes.darkBorderCountry
								} `}
							>
								{borderCountry}
							</p>
						</div>
					);
				}
			);

			return (
				<main
					className={`pt-4 pt-md-5 px-2 px-sm-5 ${
						themeContext?.islight
							? `${themes.lightModeElements}`
							: `${themes.darkModeElements}`
					}`}
				>
					<BackToHomePage from='detailsPage' />
					<div className='row mt-5 gap-5'>
						<div className='col-12 col-md-7 col-lg-6 col-xxl-4'>
							<img
								className={`${themes.img}`}
								src={countries[0].flags.png}
								alt={countries[0].flags.alt}
							/>
						</div>
						<div className='col ms-xxl-5 mt-lg-4 mt-xl-5'>
							<div className='row mb-4'>
								<div className='col'>
									<h3 className='fw-bolder'>{countries[0].name.common}</h3>
								</div>
							</div>
							<div className='row mb-4 mb-md-5'>
								<div className='col-12 col-md mb-4 mb-md-0'>
									<div className='row'>
										<p className='fw-light'>
											<span className='fw-bold'>Native Name: </span>
											{nativeNames}
										</p>
									</div>
									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Population: </span>{" "}
											{countries[0].population}
										</p>
									</div>
									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Region: </span>
											{countries[0].region}
										</p>
									</div>
									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Sub Region: </span>
											{countries[0].subregion}
										</p>
									</div>
									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Capital: </span>
											{countries[0].capital}
										</p>
									</div>
								</div>
								<div className='col'>
									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Top Level Domain: </span>
											{tlds}
										</p>
									</div>
									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Currencies: </span>
											{currencies}
										</p>
									</div>

									<div className='row'>
										<p className='fw-light'>
											{" "}
											<span className='fw-bold'>Languages: </span>
											{languages}
										</p>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-lg-3 col-xxl-2'>
									<p className='fw-bold mb-0'>Border Countries: </p>
								</div>
								<div className='col'>
									<div className='row mt-3 mt-lg-0'>{borderCountries}</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			);
		} catch (error) {
			console.log(error);
			console.log("map nem sikerült");
			return (
				<main
					className={`pt-4 pt-md-5 px-2 px-sm-5 ${
						themeContext?.islight
							? `${themes.lightModeElements}`
							: `${themes.darkModeElements}`
					}`}
				>
					<BackToHomePage from='detailsPage' />
					<div className='text-center mt-5'>
						<h1>Something went wrong!</h1>
					</div>
				</main>
			);
		}
	}
}
