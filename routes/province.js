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

module.exports = router;