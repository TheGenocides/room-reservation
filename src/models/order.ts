import { Model, DataTypes, Sequelize } from "sequelize"
import { sequelize } from "#config/db"

class borrowingOrder extends Model implements IborrowingOrder{
    id!: number
    borrowerId!: number
    roomId!: number
    note!: string
    borrowDate!: Date | null
    returnDate!: Date | null
    dueDate!: Date
    isExpired!: boolean
    status!: borrowingStatus
}


export default (async () => {
    return borrowingOrder.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        borrowerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "borrowers",
                key: 'id',
            }
        },
    
        roomId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "rooms",
                key: 'id',
            }
        },
    
        note: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "borrowed"
        },
    
        borrowDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    
        returnDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        isExpired: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        
        status: {
            type: DataTypes.ENUM("IN_PROGRESS", "BORROWING", "EXPIRED", "DONE"),
            allowNull: true,
            defaultValue: "IN_PROGRESS",
        }
    
    
    }, {sequelize, tableName: "orders"}
);
})