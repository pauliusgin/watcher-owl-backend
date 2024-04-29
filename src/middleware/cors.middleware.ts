import cors from "cors";

function handleCors(origin: originType) {
	const corsOptions = {
		origin,
		optionSuccessStatus: 200,
	};
	return cors(corsOptions);
}

export { handleCors };
