const express = require('express');
const ProvinceModel = require('../models/Province')

const router = express.Router();

/* GET Province Information listing. */
router.get('/', function(req, res, next) {

    ProvinceModel.ProvInformation((err, result) => {
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
        req.body.prov_name != "" 
    ) {
        ProvinceModel.insertProvince_information(req.body, (err, result) => {
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