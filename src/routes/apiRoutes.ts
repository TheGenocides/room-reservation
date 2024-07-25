import { Request, Response, Router } from "express";

export default function apiRoutes() {
    const router = Router();

    //The CRUD Of our API

    router.get("/", (req: Request, res: Response) => {
        res.send("Root API is Healty")
    });

    router.get("/:id", (req: Request, res: Response) => {
        res.send(req.params);
    });

    router.post("/:id", (req: Request, res: Response) => {
        console.log(req);
        res.send(req.params);
    });

    router.delete("/:id", (req: Request, res: Response) => {
        res.send(req.params);
    });

    router.put("/:id", (req: Request, res: Response) => {
        res.send(req.params);
    });
    
    return router;
}
