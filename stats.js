const {Schema, model} = require("mongoose");

const statsSchema = Schema({
    experience: {
        type: String
    },
    user: {
        type: String
    },
    date: {
        type: String
    }
}, {
    versionKey: false
});

module.exports = model("Stats", statsSchema);
