const Slot = require("./slot");

const create = payload => {

    const { slots, action, date } = payload;

    const newSlot = new Slot({
        slots,
        action,
        date
    });

    return newSlot.save();
}

 const getAll = async () => {
    return Slot.find().exec()
 }

 const getLast = async () => {
    return Slot.find().sort({ _id: -1 }).limit(1).exec()
 }

 module.exports = {
    create,
    getAll,
    getLast
 }
 