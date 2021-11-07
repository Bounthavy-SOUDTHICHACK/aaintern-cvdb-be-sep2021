const express = require('express');
const VaccinStatusModel = require('../models/Vaccination_dose_status')

const router = express.Router();

/* GET Province's vaccined listing. */
router.get('/', function(req, res, next) {

    VaccinStatusModel.VaccinationStatus((err, result) => {
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