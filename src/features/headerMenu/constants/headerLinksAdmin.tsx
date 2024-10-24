import {
	EventsIcon,
	ManagerEventsIcon,
	ProfileAdminIcon,
} from '@/shared/icons';
import { ReactNode } from 'react';

type THeaderLinks = {
	link: string;
	icon: ReactNode | JSX.Element;
};

export const headerLinksAdmin: THeaderLinks[] = [
	{
		link: '/events',
		icon: <EventsIcon />,
	},
	{
		link: '/admin',
		icon: <ManagerEventsIcon />,
	},
	{
		link: '/admin',
		icon: <ProfileAdminIcon />,
	},
];
