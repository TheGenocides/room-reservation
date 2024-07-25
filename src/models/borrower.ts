import { Model, DataTypes, Sequelize } from "sequelize"

class Borrower extends Model implements IBorrower{
    id!: number
    name!: string
    email!: string
    isStudent!: boolean
}

export default (async (sequelize: Sequelize) => {
    return Borrower.init({
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
            allowNull: false,
            references: {
                model: "rooms",
                key: 'id',
            }
        },
    
        isStudent: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: "false"
        }
    }, {sequelize, tableName: "borrowers"});
})