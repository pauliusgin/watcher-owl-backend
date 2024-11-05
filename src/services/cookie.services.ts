async function getCookie(shop: string) {
    try {
        const response = await fetch(shop, {});
        const setCookie = response.headers.get("set-cookie");

        if (!response.ok) {
            console.log("Response error:", response.status);
        }

        if (setCookie) {
            return setCookie;
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

export { getCookie };
