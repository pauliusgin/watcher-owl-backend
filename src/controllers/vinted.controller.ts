import { getCookie } from "../services/cookie.services.js";
import { searchVintedCatalog } from "../services/search.services.js";
import { handleVintedData } from "../helpers/handleIncomingData.helper.js";
import { vintedFullDataType } from "../types/types.js";

async function vintedController(searchQuery: string[]) {
    const vinted = "https://www.vinted.lt";
    const vintedCatalog =
        "https://www.vinted.lt/api/v2/catalog/items?page=1&per_page=50&search_text=";
    const cookie = "_vinted_fr_session";

    try {
        const authCookie = await getCookie(vinted, cookie);

        if (authCookie) {
            const fullData = (await searchVintedCatalog(
                vintedCatalog,
                authCookie,
                searchQuery
            )) as vintedFullDataType;

            const items = handleVintedData(fullData);

            return items;
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

export { vintedController };
