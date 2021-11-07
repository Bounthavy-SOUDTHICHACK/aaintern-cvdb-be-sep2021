const express = require('express');
const VaccinedModel = require('../models/Vaccined')

const router = express.Router();

/* GET Province's vaccined listing. */
router.get('/', function(req, res, next) {

    VaccinedModel.provVaccined((err, result) => {
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