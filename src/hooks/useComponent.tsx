import { ReactNode, createContext, useContext } from 'react';
import { useDialog } from '../components/Dialog';
import { IOptionsProp } from '../components/Dialog';

interface IComponentProviderProps {
	children: ReactNode;
}

interface ComponentContextData {
	dialog: (
		title: string,
		subtitle: string,
		options?: IOptionsProp[],
		design?: 'default' | 'minimal',
		loading?: boolean,
	) => void;
}

const ComponentContext = createContext({} as ComponentContextData);

const ComponentProvider = ({ children }: IComponentProviderProps) => {
	const { dialog, Dialog } = useDialog();

	return (
		<ComponentContext.Provider value={{ dialog }}>
			<Dialog />
			{children}
		</ComponentContext.Provider>
	);
};

const useComponent = () => {
	const context = useContext(ComponentContext);
	return context;
};

export { ComponentProvider, useComponent };
