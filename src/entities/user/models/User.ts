export interface IUser {
	id: string;
	email: string;
	fullName: string;
	password: string;
	role: 'admin' | 'client';
}
