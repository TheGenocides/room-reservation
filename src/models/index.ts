import roomInit from "#models/room";
import borrowingOrderInit from "#models/order";
import borrowerInit from "#models/borrower";

export default async () => {
    return {
        Room: (await roomInit()), 
        Borrower: (await borrowerInit()),
        Order: (await borrowingOrderInit()),
    };
}