export interface IEvent {
	id: string;
	author: string;
	updatedBy: string;
	createdAt: Date;
	updatedAt: Date;
	title: string;
	startDate: Date;
	endDate: Date;
	format: string;
	description: string;
	imageUrl: string;
	categories: string[];
}
