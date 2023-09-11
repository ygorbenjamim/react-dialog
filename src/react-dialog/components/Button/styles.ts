import styled, { css } from 'styled-components';

interface IButtonContainerProps {
	loading?: string;
	$isCancel?: boolean;
	$color?: string;
}

interface ILabelProps {
	$isCancel?: boolean;
	$color?: string;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border: none;
	padding: 14px;
	border-radius: 7px;
	background-color: ${({ loading, $color }) => {
		if (loading == 'true') {
			return css`
				#666;
			`;
		}
		return css`
			${$color}
		`;
	}};
	${({ $isCancel, $color }) => {
		if ($isCancel) {
			return css`
				background-color: transparent;
				padding: 10px;
				border: 1px solid ${$color};
			`;
		}
	}};
	transition: 0.3s all ease;
	&:hover {
		cursor: pointer;
		background-color: #666;
		transition: 0.2s all ease;
	}
`;

export const Label = styled.p<ILabelProps>`
	margin: 0;
	color: #ffff;
	background-color: transparent;
	${({ $isCancel, $color }) => {
		if ($isCancel) {
			return css`
				color: ${$color};
			`;
		}
	}};
`;
