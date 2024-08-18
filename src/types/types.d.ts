import { Notification } from "./enums.ts";

type urlType = {
    url: string;
};

type vintedItemType = {
    id: number;
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
    _id: string;
    email: string;
    password?: string;
    createdAt: number;
    isLoggedIn: boolean;
    tasks: taskType[];
};

type retrievedItem = {
    id: string;
    title: string;
    photo_thumbnail: string;
    photo_full_size: string;
    timestamp: number;
    price: number;
    currency: string;
    status: string;
    url: string;
};

type taskType = {
    userId: string;
    search: string;
    isActive: boolean;
    notification: Notification;
    items: retrievedItem[];
};
