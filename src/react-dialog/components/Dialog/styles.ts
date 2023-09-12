import styled from 'styled-components';
import { fadeIn, slideRight } from '../../styles/animations.ts';
import { IColorProps } from '../../interfaces/IColorProps.ts';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${fadeIn} 0.3s ease-out;
	width: 100%;
	z-index: 200;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
	width: 40%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	animation: ${slideRight} 0.3s ease-out;
	background-color: #ffff;
	// Mobile
	@media (max-width: 820px) {
		width: 90%;
	}
`;

export const Title = styled.h2<IColorProps>`
	font-size: large;
	margin-top: 0;
	margin-bottom: 10px;
	text-align: left;
	color: ${({ $color }) => ($color ? $color : '#252525')};
`;

export const Information = styled.p<IColorProps>`
	max-height: 50vh;
	overflow: auto;
	text-align: left;
	word-wrap: break-word;
	font-size: medium;
	white-space: pre-line;
	padding-bottom: 20px;
	margin-top: 0;
	margin-bottom: 20px;
	border-bottom: 1px solid ${({ $color }) => $color};
	color: #666;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;
