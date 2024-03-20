import { cookieService } from "../services/cookieService.js";
import { catalogSearchService } from "../services/catalogSearchService.js";

async function vintedCatalogController(searchQuery: string[]) {
	const vinted = "https://www.vinted.lt";
	const vintedCatalog =
		"https://www.vinted.lt/api/v2/catalog/items?page=1&per_page=96&search_text=";
	const cookie = "_vinted_fr_session";

	try {
		const authCookie = await cookieService(vinted, cookie);

		if (authCookie) {
			const result = await catalogSearchService(
				vintedCatalog,
				authCookie,
				searchQuery
			);

			console.log("Search terms:", searchQuery);

			return result;
		}
	} catch (error) {
		console.log("Error:", error);
	}
}

export { vintedCatalogController };
