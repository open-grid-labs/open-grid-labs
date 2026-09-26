import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router";
import {HelmetProvider} from "react-helmet-async";
import App from "./App";
import ScrollToTop from "./components/scroll-to-top";
import {ThemeProvider} from "./context/theme-provider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<HelmetProvider>
		<ThemeProvider storageKey="opengridlabs-theme">
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</HelmetProvider>
);
