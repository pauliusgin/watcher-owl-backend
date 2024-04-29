async function catalogSearchService(
	catalog: string,
	authCookie: string,
	searchQuery: string[]
) {
	try {
		const queryString = searchQuery.join("+");
		const initialOrder = "&order=newest_first";
		const fullUrl = `${catalog}${queryString}${initialOrder}`;

		const response = await fetch(fullUrl, {
			headers: {
				cookie: authCookie,
			},
		});

		if (!response.ok) {
			console.log("Connection failure:", response.status);
			return;
		}
		const result = await response.json();

		return result;
	} catch (error) {
		console.log("Error:", error);
	}
}

export { catalogSearchService };
