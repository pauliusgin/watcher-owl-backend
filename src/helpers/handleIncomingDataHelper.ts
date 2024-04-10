export function handleIncomingData(data: vintedFullDataType) {
	const items = data.items.map((item: vintedItemType) => ({
		id: item.id,
		title: item.title,
		photo: item.photo.thumbnails[0].url,
		price: Number(item.price),
		currency: item.currency,
		status: item.status,
		url: item.url,
	}));

	return items;
}
