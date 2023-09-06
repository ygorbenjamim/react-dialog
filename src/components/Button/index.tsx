import { ReactNode } from 'react';
import { Loading } from '../Loading';
import { useTheme } from 'styled-components';
import { ButtonContainer, Label } from './styles';

interface IButtonProps {
	children: ReactNode;
	onClick?: () => void;
	loading?: boolean;
	disabled?: boolean;
	type: 'button' | 'submit' | 'reset';
	isCancel?: boolean;
}

export const Button = ({
	children,
	onClick,
	loading,
	disabled,
	type,
	isCancel,
}: IButtonProps): JSX.Element => {
	const { colors } = useTheme();

	return (
		<ButtonContainer
			loading={`${loading}`}
			disabled={loading || disabled}
			type={type}
			onClick={onClick}
			$isCancel={isCancel}>
			{loading ? (
				<Loading size={23} color={colors.white} />
			) : (
				<Label $isCancel={isCancel}>{children}</Label>
			)}
		</ButtonContainer>
	);
};
