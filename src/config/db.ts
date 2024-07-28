import { Sequelize } from 'sequelize';
import { logger } from '#utils/Logger';
import env from "#config/index";
import { modelsInit } from "#models/index"

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `${env.DB_PATH || "src/databases"}/db.sqlite3`,
});

async function init(env: string) {
  try {
    await sequelize.authenticate()
    logger.info("Authenticated database!")
  } catch (error) {
    logger.error("Failed authentication: " + error)
  }

  if (env == "development"){
    const {Room, Order, Borrower} = modelsInit();

    await sequelize.sync({force: true});

    const roomData = {
      id: 1102,
      name: "Ruang Teater, Multimedia",
      majorOwner: "Administrator",
      isLabkom: false
    };

    const borrowerData= {
      name: 'Zein Aroddi Abdilah',
      email: 'englishClub@gmail.com',
      type: "student"
    };

    const orderData = {
      borrowerId: 1,
      roomId: 1102,
      dueDate: new Date(2024, 7, 25, 18),
      isExpired: false,
      status: 'IN_PROGRESS',
      note: 'Mau dipinjam buat kegiatan EnglishClub',
      borrowDate: null,
      returnDate: null
    };

    await Room.create(
      roomData
    );

    await Borrower.create(
      borrowerData
    );
    
    const order = await Order.create(
      orderData
    );

    logger.info(order.toJSON())
    const result = (await Order.findOne(
      {include: [
        {model: Room, as: "Room"},
        {model: Borrower, as: "Borrower"}
      ]}
    ))?.toJSON();

    logger.info(result);
  } else {
    await sequelize.sync();
  }
}

export {init, sequelize};