import { sequelize } from "#config/db";
import modelInit from "#models/index"
import { logger } from "#utils/Logger";

(async () => {
    const {Room, Borrower, Order} = await modelInit();

    logger.info(
            (await Order.findOne(
                {
                    include: [
                        {
                            model: Room, 
                            as: "Room"
                        },

                        {
                            model: Borrower,
                            as: "Borrower"
                        }
                    ]
                }
            )
        )?.toJSON()
    );

    const result = await Borrower.create(
        {
            name: "Rasya Aryasatya Raiansyah",
            email: "rasya.aryasatya@gmail.com",
            type: "student",
        }
    )

    console.log(result?.get())
})();