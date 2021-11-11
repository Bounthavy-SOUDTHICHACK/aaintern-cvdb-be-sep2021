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

/* Insert data listing */
router.post('/', function(req, res, next) {

    if(
        req.body.ad_id != "" &&
        req.body.emer_num != "" &&
        req.body.emer_name != "" &&
        req.body.od_date != "" &&
        req.body.od_time != "" &&
        req.body.od_confirmed != "" &&
        req.body.od_active != "" &&
        req.body.od_recovered != "" &&
        req.body.od_deceased != "" &&
        req.body.od_tested != "" &&
        req.body.od_vac_dose_ad != "" &&
        req.body.od_vac_one_dose != "" &&
        req.body.od_fully_vac != "" 
    ) {
        OverallModel.insertOverall_data_information(req.body, (err, result) => {
            if (err) {
                next(err)
            } else {
                return res.json({
                    status: 200,
                    message: 'OK'
                })
            }
        })
    } else {
        return res.status(400).json({
            status: 400,
            message: 'Bad Request'
        })
    }
});

module.exports = router;