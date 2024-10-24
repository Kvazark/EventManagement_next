import { ProfileClientIcon, CalendarIcon, EventsIcon } from '@/shared/icons';
import { THeaderLinks } from '@/features/headerMenu/types';

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
