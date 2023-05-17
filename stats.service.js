const Stat = require("./stats");

const create = payload => {

    const { experience, user, date } = payload;

    const newStats = new Stat({
        experience,
        user,
        date
    });

    return newStats.save();
}

 const getAll = async () => {
    return Stat.find().exec()
 }

 const getLast = async () => {
    return Stat.find().sort({ _id: -1 }).limit(1).exec()
 }

 const viewStats = async () => {
   const cathedral = await Stat.countDocuments({experience: "catedral"});
   const street = await Stat.countDocuments({experience: "palais concert"});
   const municipality = await Stat.countDocuments({experience: "municipalidad"});
   const palace = await Stat.countDocuments({experience: "palacio"});
   const church = await Stat.countDocuments({experience: "iglesia san francisco"});

   return { cathedral, street, municipality, palace, church };
 }

 module.exports = {
    create,
    getAll,
    getLast,
    viewStats
 }
 