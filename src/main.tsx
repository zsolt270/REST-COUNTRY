import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./main.css";
import HomePage from "./pages/HomePage";
import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
import { ThemeContextProvider } from "./services/providers/themeContext.tsx";

const router = createBrowserRouter([
	{
		path: "/REST-COUNTRY/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/REST-COUNTRY/",
				element: <HomePage />,
			},
			{
				path: "/REST-COUNTRY/country/:country",
				element: <DetailsPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<RouterProvider router={router}></RouterProvider>
		</ThemeContextProvider>
	</React.StrictMode>
);
