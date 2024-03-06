import { tokenCookie } from "./tokenCookie.js";
import { searchCatalog } from "./searchCatalog.js";

async function eshopWatcher(searchQuery) {
	try {
		const token = await tokenCookie();
		const result = await searchCatalog(token, searchQuery);
		console.log("Search terms:", searchQuery);
		return result;
	} catch (error) {
		console.log("Error:", error);
	}
}

export { eshopWatcher };
