import { ThemeProvider } from 'styled-components';
import { ComponentProvider } from './hooks/useComponent';
import Home from './pages/Home';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ComponentProvider>
				<Home />
			</ComponentProvider>
		</ThemeProvider>
	);
}

export default App;
