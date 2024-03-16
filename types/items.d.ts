type TypeUrl = {
	url: string;
};

type TypeItem = {
	id?: number;
	title: string;
	photo: {
		thumbnails: TypeUrl[];
	};
	price: number;
	currency?: string;
	status: string;
	url?: string;
};

type FullDataType = {
	items: TypeItem[];
};
