import { roomInit, Room } from "./Room";
import { orderInit, Order } from "./Order";
import { borrowerInit, Borrower } from "./Borrower";

function modelsInit(){
    const {Room, Borrower, Order} = {
        Room: (roomInit()), 
        Borrower: (borrowerInit()),
        Order: (orderInit()),
    };

    Room.hasMany(Order, { foreignKey: 'roomId', as: "Orders" });
    Order.belongsTo(Room, { foreignKey: 'roomId' , as: "Room" });

    Borrower.hasMany(Order, { foreignKey: "borrowerId", as: "Orders" });
    Order.belongsTo(Borrower, { foreignKey: 'borrowerId', as: "Borrower" });

    return {Room, Borrower, Order};
}

const models = [Room, Order, Borrower]

export {modelsInit, Room, Order, Borrower, models}