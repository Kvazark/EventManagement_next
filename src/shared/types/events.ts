export {};

declare global {
	export interface ICategory {
		id: string;
		title: string;
	}

	export interface IOnlineFormat {
		formatName: 'онлайн';
		link: string;
	}

	export interface IOfflineFormat {
		formatName: 'офлайн';
		address: string;
	}

	export interface IHybridFormat {
		formatName: 'гибрид';
		link: string;
		address: string;
	}
}
