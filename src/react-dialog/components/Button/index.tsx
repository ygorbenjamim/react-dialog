import React, { ReactNode } from 'react';
import { Loading } from '../Loading/index.tsx';
import { ButtonContainer, Label } from './styles.ts';

interface IButtonProps {
	children: ReactNode;
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	color?: string;
	type: 'button' | 'submit' | 'reset';
	isCancel?: boolean;
}

export const Button = ({
	children,
	onClick,
	loading,
	disabled,
	color,
	type,
	isCancel,
}: IButtonProps): JSX.Element => {
	return (
		<ButtonContainer
			loading={`${loading}`}
			disabled={loading || disabled}
			type={type}
			onClick={onClick}
			$color={color}
			$isCancel={isCancel}>
			{loading ? (
				<Loading size={23} color="#F4F4F4F4" />
			) : (
				<Label $isCancel={isCancel}>{children}</Label>
			)}
		</ButtonContainer>
	);
};
