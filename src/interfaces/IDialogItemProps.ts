import { IOption } from './IOption';

export interface IDialogItemProps {
	id: number;
	title: string;
	subtitle?: string;
	options?: IOption[];
}
