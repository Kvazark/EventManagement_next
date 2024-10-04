import { AppBar } from '@mui/material';

export const Header = () => {
	return (
		<AppBar
			position='static'
			elevation={0}
			sx={{
				height: '80px',
				backgroundColor: 'var(--black-color)',
			}}>
			This is header
		</AppBar>
	);
};
