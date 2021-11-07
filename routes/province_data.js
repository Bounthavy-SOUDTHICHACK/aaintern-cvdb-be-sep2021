const express = require('express');
const Province_dataModel = require('../models/Province_data')

const router = express.Router();

/* GET Province Data listing. */
router.get('/', function(req, res, next) {

    Province_dataModel.getAllOfProvinceData((err, result) => {
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