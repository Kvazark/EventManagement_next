import { Button } from '@mui/material';

export default function Home() {
	return (
		<div>
			<h1>Main Page</h1>
			<div>
				<Button href='/admin'>Go to Admin</Button>
				<Button href='/client'>Go to Client Account</Button>
			</div>
		</div>
	);
}
