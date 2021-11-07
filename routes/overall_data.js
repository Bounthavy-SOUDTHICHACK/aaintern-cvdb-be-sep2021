const express = require('express');
const OverallModel = require('../models/Overall_data')

const router = express.Router();

/* GET OverallInformation listing. */
router.get('/', function(req, res, next) {

    OverallModel.getOverallInformation((err, result) => {
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
