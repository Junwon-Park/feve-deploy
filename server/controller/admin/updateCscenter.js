const { Product } = require('../../models');
const { Cscenter } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function updateCscenter(req, res, next) {
    const cscenterComment = req.body.cscenterComment;
    const sendCscenterKey = req.body.sendCscenterKey;
    const sendUserkey = req.body.sendUserkey;

    console.log(cscenterComment,sendCscenterKey,sendUserkey)
      await Cscenter.update(
            {
                CSCENTER_COMMENT_WDATE: Sequelize.fn('NOW'),
                CSCENTER_COMMENT: cscenterComment,
                CSCENTER_STATUS: '1'
            }, {
                where: {
                    CSCENTER_KEY: sendCscenterKey,
                    USER_KEY: sendUserkey
                }
            }
        )
      .then(result => {
        console.log(result);
        res.json(result);
      })
      .catch(err => console.log(err));
}

module.exports = { updateCscenter };
