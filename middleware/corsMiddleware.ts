import cors from "cors";

export function corsMiddleware(allowedURLs: string[]) {
	const corsOptions = {
		origin: allowedURLs,
		optionSuccessStatus: 200,
	};
	return cors(corsOptions);
}
