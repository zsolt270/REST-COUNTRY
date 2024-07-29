import type { HomePageCountries } from "../services/api/apiTypes.ts";
import type { DetailsPageCountry } from "../services/api/apiTypes.ts";
import { BackToHomePage } from "../components/ui/Buttons.tsx";
import CountryCard from "./CountryCard.tsx";
import themes from "./css.modules/Main.module.css";
import Select from "./Select.tsx";
import SearchInput from "./SearchInput.tsx";

type MainProps = {
	mode: boolean;
	path: string;
	countries: HomePageCountries[] | DetailsPageCountry[];
	setCountries?: () => void;
};

export default function Main({
	mode,
	path,
	countries,
	setCountries,
}: MainProps) {
	if (path == "/") {
		return (
			<main
				className={`pt-4 pt-md-5 px-2 px-sm-5 ${
					mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
				}`}
			>
				<div className='d-block d-md-flex flex-column flex-md-row justify-content-between gap-3 mb-5'>
					<SearchInput setCountries={setCountries as () => void} />
					<Select setCountries={setCountries as () => void} />
				</div>

				<CountryCard countries={countries} />
			</main>
		);
	} else if (path == "country") {
		try {
			const nativeNames = Object.keys(countries[0].name.nativeName).map(
				(nativeKey) => {
					return countries[0].name.nativeName[nativeKey].common + ", ";
				}
			);

			const tlds = countries[0].tld.map((countryTld: string) => {
				return countryTld + " | ";
			});
			const currenciesKey = Object.keys(countries[0].currencies);

			const languages = Object.keys(countries[0].languages).map((language) => {
				return countries[0].languages[language] + ", ";
			});
			console.log(nativeNames);

			return (
				<main
					className={`pt-4 pt-md-5 px-2 px-sm-5 ${
						mode ? `${themes.lightModeElements}` : `${themes.darkModeElements}`
					}`}
				>
					<BackToHomePage
						isLight={true}
						from='detailsPage'
					/>
					<div className='row align-items-center mt-5'>
						<div className='col'>
							<img
								className='img-fluid'
								src={countries[0].flags.png}
								alt={countries[0].flags.alt}
							/>
						</div>
						<div className='col'>
							<div className='row'>
								<div className='col'>
									<h3 className='fw-bolder'>{countries[0].name.common}</h3>
								</div>
							</div>
							<div className='row'>
								<div className='col'>
									<div className='row'>
										<p>
											<span className='fw-bold'>Native Name: </span>
											{nativeNames}
										</p>
									</div>
									<div className='row'>
										<p>
											{" "}
											<span className='fw-bold'>Population: </span>{" "}
											{countries[0].population}
										</p>
									</div>
									<div className='row'>
										<p>
											{" "}
											<span className='fw-bold'>Region: </span>
											{countries[0].region}
										</p>
									</div>
									<div className='row'>
										<p>
											{" "}
											<span className='fw-bold'>Sub Region: </span>
											{countries[0].subregion}
										</p>
									</div>
									<div className='row'>
										<p>
											{" "}
											<span className='fw-bold'>Capital: </span>
											{countries[0].capital}
										</p>
									</div>
								</div>
								<div className='col'>
									<p>
										{" "}
										<span className='fw-bold'>Top Level Domain: </span>
										{tlds}
									</p>
									<div className='row'></div>
									<p>
										{" "}
										<span className='fw-bold'>Currencies: </span>
										{countries[0].currencies[currenciesKey].name}
									</p>
									<div className='row'></div>
									<p>
										{" "}
										<span className='fw-bold'>Languages: </span>
										{languages}
									</p>
									<div className='row'></div>
								</div>
							</div>
							<div className='row'>
								<div className=' d-flex'>
									<p className=' fw-bold'>Border Countries: </p>
									{countries[0].borders}
									{/* itt lehet több */}
								</div>
							</div>
						</div>
					</div>
				</main>
			);
		} catch (error) {
			console.log(error);
			console.log("map nem sikerült");
		}
	}
}
