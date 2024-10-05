import { AppBar, Box, Button } from '@mui/material';

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
			<Box>
				<Button href='/admin'>Go to Admin</Button>
				<Button href='/client'>Go to Client Account</Button>
			</Box>
		</AppBar>
	);
};
