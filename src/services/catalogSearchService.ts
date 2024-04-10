async function catalogSearchService(
	catalog: string,
	authCookie: string,
	searchQuery: string[]
) {
	try {
		const queryString = searchQuery.join("+");
		const fullUrl = `${catalog}${queryString}`;

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

		//* full objects for reference
		// console.log(result);
		// console.log(JSON.stringify(result));
		return result;
	} catch (error) {
		console.log("Error:", error);
	}
}

export { catalogSearchService };
