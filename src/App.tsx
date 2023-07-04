import { ThemeProvider } from "@mui/material";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import SpinnerComet from "./components/Spinner/SpinnerComet";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#1E1E1E",
		},
		secondary: {
			main: "#edf2ff",
		},
	},
});

theme = createTheme(theme, {
	palette: {
		info: {
			main: theme.palette.secondary.main,
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<MainRoutes />
		</ThemeProvider>
	);
}

export default App;
