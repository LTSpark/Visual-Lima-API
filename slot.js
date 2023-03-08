const {Schema, model} = require("mongoose");

const slotSchema = Schema({
    slots: {
        type: Number
    },
    action: {
        type: String
    },
    date: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = model("Slot", slotSchema);
