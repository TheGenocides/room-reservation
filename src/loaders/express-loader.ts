import { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import helmet from "helmet";
import fs from "fs";

import env from "#config/index";

import apiRoutes from "#routes/apiRoutes";
import Respond from "#utils/Respond";

const corsOption: CorsOptions = {
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    origin: env.ORIGIN,
    credentials: true,
    maxAge: 300,
};

export default function defaultLoader(app: Application) {
    return (async (app: Application) => {
        
        app.get("/", (req: Request, res: Response, next: NextFunction) => {
            res.send("Default home page")
        });

        app.use("/api", apiRoutes());

        app.use((req: Request, res: Response) => {
            return Respond.NOT_FOUND(res, "URI Not exist", null);
        });

        app.use((err: any, req: Request, res: Response, next: NextFunction) => {
            if (!fs.existsSync("/log")) {
                fs.mkdirSync("/log", { recursive: true });
            }
            if (res.headersSent) {
                return next(err);
            }
            Respond.INTERNAL_ERR(res, null, null);
        });
        return app;
    })(app);
}
