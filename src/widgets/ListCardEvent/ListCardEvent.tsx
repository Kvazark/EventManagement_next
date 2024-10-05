import s from './cardEvent.module.scss';
import { CardEvent } from '@/widgets';

const eventsMocks = [
	{
		id: '1',
		authorId: '123',
		createdAt: '2023-04-01T12:00:00.000Z',
		updatedAt: '2023-04-05T15:30:00.000Z',
		updatedBy: '456',
		title: 'React Conference 2023',
		startDate: '2023-06-01T09:00:00.000Z',
		endDate: '2023-06-03T17:00:00.000Z',
		format: 'In-person',
		description: 'A conference dedicated to the latest advancements in React.',
		image:
			'https://i.pinimg.com/564x/37/36/b6/3736b6a0fe310d5ceee25eb23cd98751.jpg',
		categories: ['frontend', 'javascript', 'react'],
	},
	{
		id: '2',
		authorId: '789',
		createdAt: '2023-03-15T10:30:00.000Z',
		updatedAt: '2023-04-10T14:00:00.000Z',
		updatedBy: '012',
		title: 'AI and Machine Learning Conference',
		startDate: '2023-09-01T10:00:00.000Z',
		endDate: '2023-09-03T18:00:00.000Z',
		format: 'Virtual',
		description:
			'Exploring the latest advancements in artificial intelligence and machine learning.',
		image:
			'https://i.pinimg.com/originals/da/53/92/da539274bffec447de9786d1c34ba476.jpg',
		categories: ['ai', 'machine-learning', 'technology'],
	},
	{
		id: '3',
		authorId: '345',
		createdAt: '2023-02-20T14:15:00.000Z',
		updatedAt: '2023-04-15T11:45:00.000Z',
		updatedBy: '678',
		title: 'DevOps Summit',
		startDate: '2023-11-01T08:30:00.000Z',
		endDate: '2023-11-02T16:30:00.000Z',
		format: 'Hybrid',
		description: 'Bridging the gap between development and operations.',
		image:
			'https://i.pinimg.com/originals/da/53/92/da539274bffec447de9786d1c34ba476.jpg',
		categories: ['devops', 'engineering', 'automation'],
	},
	{
		id: '4',
		authorId: '345',
		createdAt: '2023-02-20T14:15:00.000Z',
		updatedAt: '2023-04-15T11:45:00.000Z',
		updatedBy: '678',
		title: 'DevOps Summit',
		startDate: '2023-11-01T08:30:00.000Z',
		endDate: '2023-11-02T16:30:00.000Z',
		format: 'Hybrid',
		description: 'Bridging the gap between development and operations.',
		image:
			'https://i.pinimg.com/originals/da/53/92/da539274bffec447de9786d1c34ba476.jpg',
		categories: ['devops', 'engineering', 'automation'],
	},
	{
		id: '5',
		authorId: '123',
		createdAt: '2023-04-01T12:00:00.000Z',
		updatedAt: '2023-04-05T15:30:00.000Z',
		updatedBy: '456',
		title: 'React Conference 2023',
		startDate: '2023-06-01T09:00:00.000Z',
		endDate: '2023-06-03T17:00:00.000Z',
		format: 'In-person',
		description: 'A conference dedicated to the latest advancements in React.',
		image:
			'https://i.pinimg.com/564x/37/36/b6/3736b6a0fe310d5ceee25eb23cd98751.jpg',
		categories: ['frontend', 'javascript', 'react'],
	},
];
export const ListCardEvent = () => {
	return (
		<div className={s.cardList}>
			{eventsMocks.map((item, index) => (
				<CardEvent event={item} key={`${index}-card`} />
			))}
		</div>
	);
};
