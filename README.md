# Dialog

Este é um componente de diálogo simples, projetado para criar notificações ou mensagens de alerta elegantes em páginas da web. Inspirado no clássico "alert" do JavaScript, este componente oferece uma alternativa flexível e personalizável para exibir mensagens importantes aos usuários, mantendo a funcionalidade amigável e intuitiva.

## Instalação

```
yarn add github:ygorbenjamim/react-dialog#main
```

## Configuração

É necessário envolver toda aplicação com o `Provider`. Em seu ponto de entrada, por exemplo `/src/App.tsx`, adicione o DialogProvier e escolha uma cor primária para o seu dialog.

```js
import DialogProvider from 'react-dialog';

function App() {
	return (
		<DialogProvider color="#5d9b9b">
			{/* Rotas da aplicação ou demais providers */}
		</DialogProvider>
	);
}
```

### Parâmetros do dialog

|  param   |       Tipo       |              Descrição              | Requerido |
| :------: | :--------------: | :---------------------------------: | :-------: |
|  title   |     `string`     |          Título do dialog           |    Sim    |
| subtitle |     `string`     |         Subtítulo do dialog         |    Sim    |
| options  | `IOptionsProp[]` | Função que será executada ao clicar |    Não    |

#### O tipo `IOptionsProp` consiste na seguinte interface

```tsx
interface IOptionsProp {
	text: string;
	onPress: () => void;
}
```

## Uso

Para utilizar as funcionalidades deste componente, basta importar a função `dialog` do hook `useDialog`

```js
import { useDialog } from 'react-dialog';

const Home = () => {
	const { dialog } = useDialog();

	const handleDialog = () => {
		dialog('Título', 'Descrição');
	};

	return (
		<div>
			<button onClick={handleDialog}>Abrir dialog</button>
		</div>
	);
};

export default Home;
```
