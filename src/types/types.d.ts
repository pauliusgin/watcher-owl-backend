type urlType = {
	url: string;
};

type vintedItemType = {
	id?: number;
	title: string;
	photo: {
		thumbnails: urlType[];
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

type userInfoType = {
	email: string;
	password?: string;
	timestamp: number;
	isLoggedIn?: boolean;
};
