import { createContext, useContext } from 'react';
import { IOption } from '../interfaces/IOption.ts';

interface IDialogContextData {
	dialog: (
		title: string,
		subtitle: string,
		options?: IOption[],
		design?: 'default' | 'minimal',
		loading?: boolean,
	) => void;
}

const DialogContext = createContext({} as IDialogContextData);

const useDialog = () => {
	const context = useContext(DialogContext);
	return context;
};

export { DialogContext, useDialog };
