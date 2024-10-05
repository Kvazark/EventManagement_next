// Надо явно указать, что это клиентский компонент, т.к. next думает, что это серверный компонент
'use client';
import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';
import { Button } from '@/shared/components';
import { useRouter } from 'next/navigation';

type ConferencePageProps = {
	id: string;
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;
	console.log(id);
	return {
		props: {
			id: id as string,
		},
	};
	//const conference = await getEventByID(id as string);

	// return {
	// 	props: {
	// 		conference,
	// 	},
	// };
};

export const EventDetailPage = ({ id }: ConferencePageProps) => {
	const router = useRouter();

	return (
		<Box>
			<Box>gdgrd</Box>
			<Button label='назад' view='primary' onClick={() => router.back()} />
			<p>This is detail event page ID: {id}</p>
		</Box>
	);
};
