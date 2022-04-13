
const { Cscenter } = require("../../models");
const db = require("../../models");
const moment = require('moment');

async function cscenterinsert(req, res, next) {
    const cscenter_title=req.body.cscenter_title;
    const cscenter_contents=req.body.cscenter_contents;
    const cscenter_wdate=req.body.cscenter_wdate;
    const cscenter_status=req.body.cscenter_status;
    const cscenter_comment=req.body.cscenter_comment;
    const cscenter_comment_wdate=req.body.cscenter_comment_wdate;
    const user_key=req.body.user_key;

    await Cscenter.create({
        CSCENTER_TITLE: cscenter_title,
        CSCENTER_CONTENTS: cscenter_contents,
        CSCENTER_WDATE: cscenter_wdate,
        CSCENTER_STATUS: cscenter_status,
        CSCENTER_COMMENT: cscenter_comment,
        CSCENTER_COMMENT_WDATE: cscenter_comment_wdate,
        USER_KEY: user_key
    })

        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => console.log(err));

}

module.exports = { cscenterinsert };