import { vintedFullDataType, vintedItemType } from "../types/types.js";

function handleVintedData(data: vintedFullDataType) {
    const items = data.items.map((item: vintedItemType) => ({
        id: item.id,
        title: item.title,
        photo: item.photo.thumbnails[0].url,
        full_size_url: item.photo.full_size_url,
        timestamp: item.photo.high_resolution.timestamp,
        price: Number(item.price.amount),
        currency: item.price.currency_code,
        status: item.status,
        url: item.url,
    }));

    return items;
}

export { handleVintedData };
