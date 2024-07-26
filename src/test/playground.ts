import RoomInit from "#models/room";

(async () => {
    const Room = await RoomInit();
    console.log((await Room.findOne())?.toJSON());
})();