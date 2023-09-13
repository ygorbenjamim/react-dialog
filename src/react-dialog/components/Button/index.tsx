import React from 'react';
import { Loading } from '../Loading/index.tsx';
import { IButtonProps } from '../../interfaces/IButtonProps.ts';
import { ButtonContainer, Label } from './styles.ts';

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
				<Label $isCancel={isCancel} $color={color}>
					{children}
				</Label>
			)}
		</ButtonContainer>
	);
};
