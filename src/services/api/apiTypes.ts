type flagTypes = {
	png: string;
	svg: string;
	alt: string;
};

type nameTypes = {
	common: string;
	official: string;
	nativeName: {
		[country: string]: {
			official: string;
			common: string;
		};
	};
};
type currenciesTypes = {
	[currency: string]: {
		name: string;
		symbol: string;
	};
};
type languagesTypes = {
	[language: string]: string;
};
export type HomePageCountries = {
	flags: flagTypes;
	name: nameTypes;
	population: number;
	region: string;
	capital: string;
};

export type DetailsPageCountry = {
	flags: flagTypes;
	name: nameTypes;
	population: number;
	region: string;
	subregion: string;
	capital: string;
	tld: string[];
	currencies: currenciesTypes;
	languages: languagesTypes;
	borders: string[];
};
