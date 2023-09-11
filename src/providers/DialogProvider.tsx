import { DialogContext } from '../contexts/dialogContext';
import { useDialog } from '../components/Dialog';
import { IDialogProviderProps } from '../interfaces/IDialogProviderProps';

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
