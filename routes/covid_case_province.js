const express = require('express');
const Covid_case_provinceModel = require('../models/Covid_case_province')

const router = express.Router();

/* GET Covid-19 Information in Laos listing. */
router.get('/', function(req, res, next) {

    Covid_case_provinceModel.Covid_case_province((err, result) => {
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
