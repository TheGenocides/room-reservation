import { Room, Borrower, Order } from "#models/index"
import { logger } from "#utils/Logger";

(async () => {
    const result = await Order.find(null, ["Room", "Borrower"])
    logger.info(result);
})();