const express = require('express');
const Case_chartsModel = require('../models/Case_charts')

const router = express.Router();

/* get users listing. */
router.get('/', function(req, res, next) {
    // const {start_date, end_date} = req.body
    Case_chartsModel.Case_charts((err, result) => {
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
