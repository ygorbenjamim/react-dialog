import { createContext, useContext } from 'react';
import { IDialogContextData } from '../interfaces/IDialogContextData.ts';

const DialogContext = createContext({} as IDialogContextData);

const useDialog = () => {
	const context = useContext(DialogContext);
	return context;
};

export { DialogContext, useDialog };
