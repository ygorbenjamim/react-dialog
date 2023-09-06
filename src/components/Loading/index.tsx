import { Container, Spinner, Label } from './styles';

interface ILoadingProps {
	color: string;
	size: number;
	label?: string;
}

export const Loading = ({ color, size, label }: ILoadingProps): JSX.Element => {
	return (
		<Container>
			<Spinner color={color} size={size} />
			{label && <Label>{label}</Label>}
		</Container>
	);
};
