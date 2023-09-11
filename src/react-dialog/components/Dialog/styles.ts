import styled from 'styled-components';
import { fadeIn, slideRight } from '../../../styles/animations.ts';

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
	z-index: 1;
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

export const Title = styled.h2`
	font-size: large;
	margin-bottom: 20px;
	color: #43bec6;
`;

export const Information = styled.p`
	max-height: 50vh;
	overflow: auto;
	word-wrap: break-word;
	font-size: medium;
	white-space: pre-line;
	padding-bottom: 20px;
	margin-bottom: 20px;
	border-bottom: 1px solid #43bec6;
	color: #666;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 10px;
`;
