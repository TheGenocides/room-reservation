import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "#config/db"

class Borrower extends Model implements IBorrower{
    id!: number
    name!: string
    email!: string
    isStudent!: boolean
    type!: borrowerType
}

export default (async () => {
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
})