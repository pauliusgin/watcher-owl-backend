import { findUserById } from "../controllers/user.controllers.js";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

export interface Decoded {
    userKey: string;
    iat: number;
    exp: number;
}

export async function authenticateUser(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authorization = req.header("Authorization");

    if (!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_KEY!) as Decoded;

    const user = await findUserById(decoded.userKey);

    if (!user) {
        return res.sendStatus(401);
    }

    return next();
}
