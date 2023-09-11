import React from 'react';
import { ILoadingProps } from '../../interfaces/ILoadingProps.ts';
import { Container, Spinner, Label } from './styles.ts';

export const Loading = ({ color, size, label }: ILoadingProps): JSX.Element => {
	return (
		<Container>
			<Spinner color={color} size={size} />
			{label && <Label>{label}</Label>}
		</Container>
	);
};
