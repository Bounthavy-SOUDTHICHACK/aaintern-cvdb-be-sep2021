const express = require('express');
const Recovered_caseModel = require('../models/Recovered_case')

const router = express.Router();

/* GET Province Information listing. */
router.get('/', function(req, res, next) {

    Recovered_caseModel.Recovered_case((err, result) => {
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