import { Sequelize } from "sequelize";
import roomInit from "#models/room";
import borrowingOrderInit from "#models/borrowingOrder";
import borrowerInit from "#models/borrower";

export default async (sequelize: Sequelize) => {
    return {
        Room: (await roomInit(sequelize)), 
        Borrower: (await borrowerInit(sequelize)),
        Order: (await borrowingOrderInit(sequelize)),
    };
}