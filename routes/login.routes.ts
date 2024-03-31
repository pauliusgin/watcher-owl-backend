import { Router } from "express";

const loginRouter = Router();

loginRouter.get("/login", async (_, res) => {
	console.log("login route");
});

export { loginRouter };
