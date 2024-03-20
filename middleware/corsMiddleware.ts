import cors from "cors";

export function corsMiddleware(allowedOrigins: originType) {
	const corsOptions = allowedOrigins
		? {
				origin: allowedOrigins,
				optionSuccessStatus: 200,
			}
		: {};
	return cors(corsOptions);
}
