async function cookieService(shop: string, cookie: string) {
	try {
		const response = await fetch(shop, {});
		const setCookie = response.headers.get("set-cookie");

		if (!response.ok) {
			console.log("Response error:", response.status);
		}

		if (setCookie) {
			return setCookie
				.replaceAll(",", ";")
				.split(";")
				.find((string) => string.includes(cookie));
		}
	} catch (error) {
		console.log("Error:", error);
	}
}

export { cookieService };
