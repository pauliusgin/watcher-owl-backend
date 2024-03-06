const eshop = "https://www.vinted.lt";
const catalog = "/api/v2/catalog/items?page=1&per_page=96&search_text=";

// cookie is a string
// searchQuery is an array of words
async function searchCatalog(cookie, searchQuery) {
	try {
		const queryString = searchQuery.join("+");
		const fullUrl = `${eshop}${catalog}${queryString}`;
		const response = await fetch(fullUrl, {
			headers: {
				cookie: cookie,
			},
		});

		if (!response.ok) {
			console.log("Connection failure:", response.status);
			return;
		}
		const result = await response.json();

		// full objects for reference
		// console.log(result);
		return result;
	} catch (error) {
		console.log("Error:", error);
	}
}

export { searchCatalog };
