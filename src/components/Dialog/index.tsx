import { useCallback, useState } from 'react';
import { Button } from '../Button';
import {
	Container,
	Content,
	Title,
	Information,
	ButtonsContainer,
} from './styles';
import { IDialogItemProps } from '../../interfaces/IDialogItemProps';
import { IOption } from '../../interfaces/IOption';

export const useDialog = () => {
	const [dialogList, setDialogList] = useState<IDialogItemProps[]>([]);

	const dialog = (title: string, subtitle: string, options?: IOption[]) => {
		setDialogList([
			...dialogList,
			{
				id: dialogList.length + 1,
				title: title,
				subtitle: subtitle,
				options: options,
			},
		]);
	};

	const Dialog = (): JSX.Element => {
		const handlePressOption = (item: IOption, id: number) => {
			item.onPress();
			handleRemove(id);
		};

		const handleRemove = useCallback(
			(id: number) => {
				const dialogListFilter = dialogList.filter(
					dialog => dialog.id !== id,
				);
				setDialogList(dialogListFilter);
			},
			[dialogList],
		);

		if (dialogList.length) {
			return (
				<Container>
					{dialogList.map((dialog, i) => {
						return (
							<Content
								key={i}
								//onClick={() => handleRemove(dialog.id)}
							>
								<Title>{dialog.title}</Title>
								<Information>{dialog.subtitle}</Information>
								<ButtonsContainer>
									{!dialog.options && (
										<Button
											onClick={() => setDialogList([])}
											type="button">
											OK
										</Button>
									)}
									{dialog.options?.map(item => {
										return (
											<Button
												onClick={() =>
													handlePressOption(
														item,
														dialog.id,
													)
												}
												key={item.text}
												isCancel={
													item.text.toUpperCase() ==
														'CANCELAR' ||
													item.text.toUpperCase() ==
														'VOLTAR' ||
													item.text.toUpperCase() ==
														'NÃO'
												}
												type="button">
												{item.text}
											</Button>
										);
									})}
								</ButtonsContainer>
							</Content>
						);
					})}
				</Container>
			);
		}
		return <></>;
	};

	return { Dialog, dialog };
};
