const sequelize = require('sequelize');
const Op = sequelize.Op;
const { User } = require('../../models');
const { Cscenter } = require('../../models');

async function getCscenterList(req, res) {
    await Cscenter.findAll({
        attributes:['CSCENTER_KEY','CSCENTER_TITLE','CSCENTER_CONTENTS',
                    'CSCENTER_WDATE','CSCENTER_STATUS','CSCENTER_COMMENT',
                    'CSCENTER_COMMENT_WDATE','USER_KEY'],
        where:{
            CSCENTER_KEY:req.body.CSCENTER_KEY
        }
    })
    .then((result) => {
        console.log("CscenterList has been responsed from db : ", result);
        res.json(result);
    })
    .catch((err) => console.log(err));
}

module.exports = {getCscenterList};