import { ReactNode } from 'react';

declare module 'react-dialog' {
	interface IDialogProviderProps {
		children: ReactNode;
		color?: string;
	}

	export default function DialogProvider({
		children,
		color,
	}: IDialogProviderProps): JSX.Element | null;

	interface IOption {
		text: string;
		onPress: () => void;
	}

	export interface IDialogContextData {
		dialog: (title: string, subtitle: string, options?: IOption[]) => void;
	}

	export function useDialog(): IDialogContextData;
}
