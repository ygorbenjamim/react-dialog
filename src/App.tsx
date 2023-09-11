import DialogProvider from './providers/DialogProvider';
import Home from './pages/Home';

function App() {
	return (
		<DialogProvider>
			<Home />
		</DialogProvider>
	);
}

export default App;
