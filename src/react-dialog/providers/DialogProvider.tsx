import { DialogContext } from '../contexts/dialogContext.ts';
import { useDialog } from '../components/Dialog/index.tsx';
import { IDialogProviderProps } from '../interfaces/IDialogProviderProps.ts';

const DialogProvider = ({ children }: IDialogProviderProps) => {
	const { dialog, Dialog } = useDialog();

	return (
		<DialogContext.Provider value={{ dialog }}>
			<Dialog />
			{children}
		</DialogContext.Provider>
	);
};

export default DialogProvider;
