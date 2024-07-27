type flagTypes = {
	png: string;
	svg: string;
	alt: string;
};

type nametypes = {
	common: string;
	official: string;
	nativeName: {
		eng: {
			official: string;
			common: string;
		};
	};
};

export type HomePageCountries = {
	flags: flagTypes;
	name: nametypes;
	population: number;
	region: string;
	capital: string;
};
