import { ProfileClientIcon, CalendarIcon, EventsIcon } from '@/shared/icons';
import { ReactNode } from 'react';

type THeaderLinks = {
	link: string;
	icon: ReactNode | JSX.Element;
};

export const headerLinksClient: THeaderLinks[] = [
	{
		link: '/events',
		icon: <EventsIcon />,
	},
	{
		link: '/client/calendar',
		icon: <CalendarIcon />,
	},
	{
		link: '/client',
		icon: <ProfileClientIcon />,
	},
];
