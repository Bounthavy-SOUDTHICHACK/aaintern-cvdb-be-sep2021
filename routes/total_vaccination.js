const express = require('express');
const Total_vaccinationModel = require('../models/Total_vaccination')

const router = express.Router();

/* GET Province's vaccined listing. */
router.get('/', function(req, res, next) {

    Total_vaccinationModel.Total_vaccintion((err, result) => {
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