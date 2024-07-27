import roomInit from "#models/room";
import borrowingOrderInit from "#models/order";
import borrowerInit from "#models/borrower";

export default async () => {
    const {Room, Borrower, Order} = {
        Room: (roomInit()), 
        Borrower: (borrowerInit()),
        Order: (borrowingOrderInit()),
    };

    Room.hasMany(Order, { foreignKey: 'roomId', as: "Orders" });
    Order.belongsTo(Room, { foreignKey: 'roomId' , as: "Room" });

    Borrower.hasMany(Order, { foreignKey: "borrowerId", as: "Orders" });
    Order.belongsTo(Borrower, { foreignKey: 'borrowerId', as: "Borrower" });

    return {Room, Borrower, Order};
}