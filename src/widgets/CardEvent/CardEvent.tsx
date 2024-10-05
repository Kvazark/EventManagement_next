import s from './cardEventStyled.module.scss';
import { BodyText, HeaderText } from '@/shared/components';
import { Box } from '@mui/material';

type TCardEventProps = {
	event: any;
};
export const CardEvent = ({ event }: TCardEventProps) => {
	return (
		<Box className={s.cardWrapper}>
			{/*<Link*/}
			{/*	to={'/'}*/}
			{/*	state={{ from: location }}*/}
			{/*	className='card-wrapper link-reset'>*/}
			{/*</Link>*/}
			<Box className={s.cardWrapper_imgBox}>
				<img src={event.image} alt='event' />
			</Box>
			<Box className={s.cardWrapper_info}>
				<Box paddingBottom='8px'>
					<HeaderText
						text={event.title}
						size='h3'
						color={'var(--accent-light-color)'}
					/>
				</Box>
				<Box display='flex' flexDirection='column'>
					<BodyText text={`${event.startDate}-${event.endDate}`} />
				</Box>
			</Box>
		</Box>
	);
};
