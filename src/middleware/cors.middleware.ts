import cors from "cors";

function handleCors(origin: originType) {
	const corsOptions = {
		origin,
		methods: ["GET", "POST", "PATCH", "DELETE"],
		optionSuccessStatus: 200,
	};
	return cors(corsOptions);
}

export { handleCors };
