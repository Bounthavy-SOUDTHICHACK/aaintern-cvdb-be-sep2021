const express = require('express');
const time_on_case_chartsModel = require('../models/Time_on_case_charts')

const router = express.Router();

/* get users listing. */
router.get('/', function(req, res, next) {
    // const {start_date, end_date} = req.body
    time_on_case_chartsModel.Time_on_case_charts((err, result) => {
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
