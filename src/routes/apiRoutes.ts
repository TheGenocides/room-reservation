import { NextFunction, Request, Response, Router } from "express";

import Respond from "#utils/Respond";

export default function apiRoutes() {
    const router = Router();
    router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
        return req.params
    });
    return router;
}
