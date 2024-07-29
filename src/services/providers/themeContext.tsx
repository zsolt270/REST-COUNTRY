import React, { createContext, useState } from "react";

type themeType = {
	islight: boolean;
	setIsLight: React.Dispatch<React.SetStateAction<boolean>>;
};

type themeContextProviderProps = {
	children: React.ReactNode;
};

export const ThemeContext = createContext<themeType | null>(null);

export const ThemeContextProvider = ({
	children,
}: themeContextProviderProps) => {
	const [islight, setIsLight] = useState(true);
	return (
		<ThemeContext.Provider value={{ islight, setIsLight }}>
			{children}
		</ThemeContext.Provider>
	);
};
