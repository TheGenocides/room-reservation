import { Request, Response, Router } from "express";
import { Order, Room, Borrower } from "#models/index"
import Respond from "#utils/Respond";

export default function apiRoutes() {
    const router = Router();

    //The CRUD Of our API

    router.get("/", (req: Request, res: Response) => {
        res.send("Root API is Healty")
    });

    router.get("/:id", async (req: Request, res: Response) => {
        const id = req.params.id
        const order = await Order.findByPk(id, {
                    include: [
                    {model: Room, as: "Room"},
                    {model: Borrower, as: "Borrower"}
                ]
            }
        )
        
        if (order){
            res.send(order.toJSON());
        } else {
            Respond.NOT_FOUND(res, `Order with ${id} not found`, Object)
        }
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
