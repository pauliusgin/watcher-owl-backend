import { app } from "./index.js";

const PORT: number = 3000;

app.listen(PORT, () => {
	console.log("====== Server is listening on port", PORT, "=======");
});
