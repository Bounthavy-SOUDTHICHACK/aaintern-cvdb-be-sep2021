const express = require('express');
const Total_vaccination_dose1Model = require('../models/Total_vaccination_dose1')

const router = express.Router();

/* GET Province Information listing. */
router.get('/', function(req, res, next) {

    Total_vaccination_dose1Model.Total_vaccination_dose_1((err, result) => {
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