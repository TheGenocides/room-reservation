import RoomInit from "#models/room";

(async () => {
    const Room = RoomInit();
    console.log((await Room.findOne())?.get());
})();