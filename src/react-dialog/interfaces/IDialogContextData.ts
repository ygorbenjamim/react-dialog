import { IOption } from './IOption';

export interface IDialogContextData {
	dialog: (
		title: string,
		subtitle: string,
		options?: IOption[],
		design?: 'default' | 'minimal',
		loading?: boolean,
	) => void;
}
