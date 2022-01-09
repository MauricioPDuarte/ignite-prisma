import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string
}

export async function ensureAuthenticateClient(
    request: Request,
    response: Response,
    next: NextFunction
    ) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing"
        });
    }

    // Bearer asdasdasd
    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, "9da2666f41b477f4fd7be2a3734ab003") as IPayload;

        request.id_client = sub;

        return next();
    } catch(err) {
        return response.status(401).json({
            message: "Invalid token!"
        });
    }
}