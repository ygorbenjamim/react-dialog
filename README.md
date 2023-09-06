# dialog

Este é um componente de diálogo simples, projetado para criar notificações ou mensagens de alerta elegantes em páginas da web. Inspirado no clássico "alert" do JavaScript, este componente oferece uma alternativa flexível e personalizável para exibir mensagens importantes aos usuários, mantendo a funcionalidade amigável e intuitiva.

## Configuração

É necessário envolver toda aplicação com o `Provider` que está em hooks/useComponent

```tsx
import { ComponentProvider } from './hooks/useComponent';
function App() {
	return (
		<ComponentProvider>
			<Home />
		</ComponentProvider>
	);
}
```

## Propriedades

### Propriedades

|   Prop   |       Tipo       |              Descrição              | Requerido |
| :------: | :--------------: | :---------------------------------: | :-------: |
|  title   |     `string`     | Função que será executada ao clicar |    Sim    |
| subtitle |     `string`     | Função que será executada ao clicar |    Sim    |
| options  | `IOptionsProp[]` | Função que será executada ao clicar |    Não    |

#### O tipo `IOptionsProp` consiste na seguinte interface

```tsx
interface IOptionsProp {
	text: string;
	onPress: () => void;
}
```

## Uso

Para utilizar as funcionalidades deste componente, basta importar a função `dialog` do hook `useComponent`

```tsx
import { useComponent } from '../../hooks/useComponent';

const Home = () => {
	const { dialog } = useComponent();

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
