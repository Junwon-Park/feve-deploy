const { Product } = require('../../models');
const { Inspection } = require('../../models');
const db = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

async function updateInspection(req, res, next) {
    const sendInspectionStatus = req.body.sendInspectionStatus;
    const sendInsepctionResult = req.body.sendInsepctionResult;
    const sendProductKey = req.body.sendProductKey;
    const sendUserkey = req.body.sendUserkey;

    console.log( sendInspectionStatus, sendInsepctionResult, sendProductKey, sendUserkey )

      await Inspection.update(
            {
                INSPECTION_DATE: Sequelize.fn('NOW'),
                INSPECTION_RDATE: Sequelize.fn('NOW'),
                INSPECTION_STATUS: sendInspectionStatus,
                INSPECTION_RESULT: sendInsepctionResult
            }, {
                where: {
                    PRODUCT_KEY: sendProductKey,
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

module.exports = { updateInspection };
