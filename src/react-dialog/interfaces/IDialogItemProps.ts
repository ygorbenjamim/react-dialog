import { IOption } from './IOption.ts';

export interface IDialogItemProps {
	id: number;
	title: string;
	subtitle?: string;
	options?: IOption[];
}
