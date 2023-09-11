import { ReactNode } from 'react';

declare module 'react-dialog' {
	interface IDialogProviderProps {
		children: ReactNode;
		color?: string;
	}

	export const DialogProvider: ({
		children,
		color,
	}: IDialogProviderProps) => JSX.Element;

	interface IOption {
		text: string;
		onPress: () => void;
	}

	export const dialog: (
		title: string,
		subtitle: string,
		options?: IOption[],
	) => void;
}
