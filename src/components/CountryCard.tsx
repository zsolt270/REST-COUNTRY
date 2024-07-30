import { useContext } from "react";
import { Link } from "react-router-dom";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import { ThemeContext } from "../services/providers/themeContext.tsx";
import styles from "./css.modules/CountryCard.module.css";

type CountryCardProps = {
	countries: HomePageCountries[];
};

export default function CountryCard({ countries }: CountryCardProps) {
	const themeContext = useContext(ThemeContext);
	try {
		const countryList = countries.map((country) => {
			return (
				<Link
					key={country.name.common}
					className='col d-flex justify-content-center text-decoration-none'
					to={`/REST-COUNTRY/country/${country.name.common}`}
				>
					<div
						className={`card mb-5 ${
							themeContext?.islight ? styles.lightCard : styles.darkCard
						}`}
						style={{ width: "18rem" }}
					>
						<img
							src={country.flags.png}
							alt={country.flags.alt}
							className={`card-img-top img-fluid ${styles.img}`}
						/>

						<div className='card-body'>
							<h5 className='card-title fw-bold my-3'>{country.name.common}</h5>
							<p className='card-text mb-1'>
								<span className='fw-bold'>Population: </span>
								{country.population}
							</p>
							<p className='card-text mb-1'>
								<span className='fw-bold'>Region: </span> {country.region}
							</p>
							<p className='card-text mb-4'>
								<span className='fw-bold'>Capital: </span> {country.capital}
							</p>
						</div>
					</div>
				</Link>
			);
		});
		return <div className='row'>{countryList}</div>;
	} catch (error) {
		console.log(error);
		return (
			<div className={`${styles.errorMsgDiv}`}>
				<h1>The country was not found!</h1>
				<h2>Try another one.</h2>
			</div>
		);
	}
}
