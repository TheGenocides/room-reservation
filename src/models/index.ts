import { Sequelize } from "sequelize";
import roomInit from "#models/room";
import borrowingOrderInit from "#models/borrowingOrder";
import borrowingInit from "#models/borrowingOrder";

export default async (sequelize: Sequelize) => {
    return {
        Room: (await roomInit(sequelize)), 
        Order: (await borrowingOrderInit(sequelize)),
        Borrower: (await borrowingInit(sequelize)),
    };
}