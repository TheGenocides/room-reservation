import { DataTypes, Model } from "sequelize"
import { sequelize } from "#config/db"

class Room extends Model implements IRoom{
    id!: number
    name!: string
    roomOwner!: roomOwner
    isLabkom!: boolean
}

function roomInit(){
  return Room.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },

    name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    majorOwner: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

    isLabkom: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    }, {sequelize, tableName: "rooms", timestamps: false, freezeTableName: true}
  )
}

export {roomInit, Room}