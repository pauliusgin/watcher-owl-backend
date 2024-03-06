const eshop = "https://www.vinted.lt";
const cookieName = "_vinted_fr_session";

async function tokenCookie() {
	try {
		const response = await fetch(eshop, {});

		const setCookie = response.headers.get("set-cookie");

		if (!response.ok) {
			console.log("Response error:", response.status);
		}

		const cookie = setCookie
			.replaceAll(",", ";")
			.split(";")
			.find((string) => string.includes(cookieName));
		return cookie;
	} catch (error) {
		console.log("Error:", error);
	}
}

export { tokenCookie };
