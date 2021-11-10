const express = require('express');
const Total_vaccination_dose_2Model = require('../models/Total_vaccination_dose2')

const router = express.Router();

/* GET Province Information listing. */
router.get('/', function(req, res, next) {

    Total_vaccination_dose_2Model.Total_vaccination_dose_2((err, result) => {
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