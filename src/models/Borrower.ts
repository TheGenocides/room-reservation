import { DataTypes } from "sequelize"
import { sequelize } from "#config/db"
import Model from "./Model"

class Borrower extends Model implements IBorrower{
    id!: number
    name!: string
    email!: string
    isStudent!: boolean
    type!: borrowerType
}

function borrowerInit(){
    return Borrower.init(
        {   
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },

            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        
            email: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        
            type: {
                type: DataTypes.ENUM("student", "teacher", "other"),
                allowNull: false,
                defaultValue: "other"
                }
        }, {sequelize, timestamps: false, tableName: "borrowers"}
    );
}

export {borrowerInit, Borrower}