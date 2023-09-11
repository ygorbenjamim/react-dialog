import { ReactNode } from 'react';

export interface IButtonProps {
	children: ReactNode;
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	color?: string;
	type: 'button' | 'submit' | 'reset';
	isCancel?: boolean;
}
