import cors from "cors";

function corsMiddleware(allowedOrigins: originType) {
	const corsOptions = {
		origin: allowedOrigins,
		optionSuccessStatus: 200,
		// methods: ["GET", "POST", "PUT", "DELETE"],
		// allowedHeaders: ["Content-Type", "Authorization"],
		// credentials: true,
	};
	return cors(corsOptions);
}

export { corsMiddleware };
