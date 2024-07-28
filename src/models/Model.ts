import { IncludeOptions, Model as SequelizeModel } from "sequelize"
import { Room, Borrower, Order } from "./index"

class Model extends SequelizeModel {
    static parseIncludeData(includes: Array<"Room" | "Borrower" | "Orders">): IncludeOptions{
        const includesData: IncludeOptions = includes ? {
            include: [
                    
            ]
        }:{};

        if (includes.indexOf("Room") != -1){
            includesData.include?.push(
                {
                    "model": Room,
                    as: "Room"
                }
            )
        }

        if (includes.indexOf("Borrower") != -1){
            includesData.include?.push(
                {
                    "model": Borrower,
                    as: "Borrower"
                }
            )
        }

        if (includes.indexOf("Orders") != -1){
            includesData.include?.push(
                {
                    "model": Order,
                    as: "Orders"
                }
            )
        }

        return includesData;
    }


    static async find(PK: string | number | null = null, includes: Array<"Room" | "Borrower"> = []){
        const includesData = this.parseIncludeData(includes)

        if (!PK){
            return (await this.findOne(
                includesData
            ))?.toJSON()
        } else {
            return (await this.findByPk(
                PK,
                includesData
            ))?.toJSON()
        }
    }
}

export default Model;