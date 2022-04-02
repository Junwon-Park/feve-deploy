const { Cscenter } = require("../../models");
const { User } = require("../../models");
const db = require("../../models");

async function cscenter(req, res, next) {

    await Cscenter.findAll({
        includes: [{
            model: User,
        }]
    })
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));
}

module.exports = { cscenter };