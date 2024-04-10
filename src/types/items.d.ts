type urlType = {
	url: string;
};

type vintedItemType = {
	id?: number;
	title: string;
	photo: {
		thumbnails: urlType[];
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
