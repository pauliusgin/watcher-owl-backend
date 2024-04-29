async function catalogSearchService(
	catalog: string,
	authCookie: string,
	searchQuery: string[]
) {
	try {
		const queryString = searchQuery.join("+");
		const fullUrl = `${catalog}${queryString}&order=newest_first`;

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
