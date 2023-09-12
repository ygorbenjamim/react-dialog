import { IOption } from './IOption';

export interface IDialogContextData {
	dialog: (title: string, subtitle: string, options?: IOption[]) => void;
}
