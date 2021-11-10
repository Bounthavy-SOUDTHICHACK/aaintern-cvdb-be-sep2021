const express = require('express');
const Active_caseModel = require('../models/Active_case')

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    Active_caseModel.Active_case((err, result) => {
        if (err) {
            next(err)
        } else {
            return res.json({
                status: 200,
                data: result
            })
        }
    })
  
});

module.exports = router;
