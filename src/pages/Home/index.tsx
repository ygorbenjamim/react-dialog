import { useDialog } from '../../contexts/dialogContext';

const Home = () => {
	const { dialog } = useDialog();

	const handleDialog = () => {
		dialog('Título', 'Descrição');
	};

	const handleDialogWithOptions = () => {
		const options = [
			{ text: 'Primeira', onPress: () => {} },
			{ text: 'Segunda', onPress: () => {} },
			{ text: 'Terceita', onPress: () => {} },
			{ text: 'Cancelar', onPress: () => {} },
		];
		dialog('Título', 'Descrição', options);
	};

	return (
		<div>
			<h1>Componente de dialog</h1>
			<button onClick={handleDialog}>Abrir dialog</button>
			<br />
			<button onClick={handleDialogWithOptions}>
				Abrir dialog com opções
			</button>
		</div>
	);
};

export default Home;
