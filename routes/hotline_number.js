const express = require('express');
const HotlineModel = require('../models/Hotline_number')

const router = express.Router();

/* GET Emergency Contact listing. */
router.get('/', function(req, res, next) {

    HotlineModel.getEmergencyContact((err, result) => {
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
