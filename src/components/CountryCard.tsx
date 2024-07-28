import { useState } from "react";
import type { HomePageCountries } from "../services/api/apiTypes.ts";
import styles from "./css.modules/CountryCard.module.css";

type CountryCardProps = {
	countries: HomePageCountries[];
};

export default function CountryCard({ countries }: CountryCardProps) {
	try {
		const countryList = countries.map((country) => {
			return (
				<div
					key={country.name.common}
					className='col d-flex justify-content-center '
				>
					<div
						className='card mb-5'
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
				</div>
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
