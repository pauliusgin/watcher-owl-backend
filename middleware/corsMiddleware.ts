import cors from "cors";

function corsMiddleware(allowedOrigins: originType) {
	const corsOptions = allowedOrigins
		? {
				origin: allowedOrigins,
				optionSuccessStatus: 200,
			}
		: {};
	return cors(corsOptions);
}

export { corsMiddleware };
