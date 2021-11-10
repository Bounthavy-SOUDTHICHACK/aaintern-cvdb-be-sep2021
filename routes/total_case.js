const express = require('express');
const Total_caseModel = require('../models/Total_case')

const router = express.Router();

/* GET Province Information listing. */
router.get('/', function(req, res, next) {

    Total_caseModel.Total_Case((err, result) => {
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