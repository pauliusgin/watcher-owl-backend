type urlType = {
	url: string;
};

type vintedItemType = {
	id?: number;
	title: string;
	photo: {
		thumbnails: urlType[];
		full_size_url: string;
		high_resolution: {
			timestamp: string;
		};
	};
	price: number;
	currency?: string;
	status: string;
	url?: string;
};

type vintedFullDataType = {
	items: vintedItemType[];
};

type originType = string | string[] | undefined;

type userInDatabaseType = {
	email: string;
	password?: string;
	timestamp: number;
};

type taskType = {
	userEmail: string;
	title: string;
	search: string[];
	timestamp: Date;
	isActive: boolean;
	isFavorite: boolean;
	notification: "none" | "sms" | "email";
};
