const express = require('express');
const Vaccine_provinceModel = require('../models/Vaccine_province')

const router = express.Router();

/* GET Province's vaccined listing. */
router.get('/', function(req, res, next) {

    Vaccine_provinceModel.Vaccine_province((err, result) => {
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