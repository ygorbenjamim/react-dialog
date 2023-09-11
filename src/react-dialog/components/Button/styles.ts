import styled, { css } from 'styled-components';

interface IButtonContainerProps {
	loading?: string;
	$isCancel?: boolean;
}

interface ILabelProps {
	$isCancel?: boolean;
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border: none;
	padding: 7px;
	border-radius: 7px;
	background-color: ${({ loading }) => {
		if (loading == 'true') {
			return css`
				#666;
			`;
		}
		return css`
			#43bec6
		`;
	}};
	${({ $isCancel }) => {
		if ($isCancel) {
			return css`
				background-color: transparent;
				padding: 3px;
				border: 1px solid #43bec6;
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
	color: #ffff;
	background-color: transparent;
	${({ $isCancel }) => {
		if ($isCancel) {
			return css`
				color: #43bec6;
			`;
		}
	}};
`;
