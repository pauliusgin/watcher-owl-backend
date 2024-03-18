export function handleIncomingData(data: FullDataType) {
	const items = data.items
		.map((item: TypeItem) => ({
			id: item.id,
			title: item.title,
			photo: item.photo.thumbnails[0].url,
			price: Number(item.price),
			currency: item.currency,
			status: item.status,
			url: item.url,
		}))
		.slice(0, 99);

	return items;
}
