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
        req.body.prov_id != "" &&
        req.body.pd_date != "" &&
        req.body.pd_time != "" &&
        req.body.pd_confirmed != "" &&
        req.body.pd_active != "" &&
        req.body.pd_recovered != "" &&
        req.body.pd_deceased != "" &&
        req.body.pd_tested != "" &&
        req.body.pd_vac_dose_ad != "" &&
        req.body.pd_vac_one_dose != "" &&
        req.body.pd_fully_vac != "" 
    ) {
        Province_dataModel.insertProvince_data_information(req.body, (err, result) => {
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