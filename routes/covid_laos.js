const express = require('express');
const CovidModel = require('../models/Covid-19_Laos')

const router = express.Router();

/* GET Covid-19 Information in Laos listing. */
router.get('/', function(req, res, next) {

    CovidModel.getCovidLaos((err, result) => {
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
