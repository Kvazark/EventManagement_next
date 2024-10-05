export interface IEvent {
	id: string;
	author: IUserBase;
	createdAt: Date;
	updatedAt?: Date;
	updatedBy?: IUserBase;
	title: string;
	startDate: Date;
	endDate: Date;
	format: IOnlineFormat | IOfflineFormat;
	description?: string;
	imageUrl: string;
	categories?: ICategory[];
}
