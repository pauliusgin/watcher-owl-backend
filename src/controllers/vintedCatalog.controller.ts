import { cookieService } from "../services/cookie.service.js";
import { catalogSearchService } from "../services/catalogSearch.service.js";

// POST /proxy
async function vintedCatalogController(searchQuery: string[]) {
	const vinted = "https://www.vinted.lt";
	const vintedCatalog =
		"https://www.vinted.lt/api/v2/catalog/items?page=1&per_page=50&search_text=";
	const cookie = "_vinted_fr_session";

	try {
		const authCookie = await cookieService(vinted, cookie);

		if (authCookie) {
			const result = await catalogSearchService(
				vintedCatalog,
				authCookie,
				searchQuery
			);

			return result;
		}
	} catch (error) {
		console.log("Error:", error);
	}
}

export { vintedCatalogController };
