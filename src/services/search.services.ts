async function searchVintedCatalog(
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
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
                Referer: "https://www.vinted.lt/",
                Origin: "https://www.vinted.lt",
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
				"Accept-Encoding": "gzip, deflate, br, zstd" 
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

export { searchVintedCatalog };
