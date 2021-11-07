const express = require('express');
const Vaccination_graphModel = require('../models/Vaccined')

const router = express.Router();

/* GET Province's vaccined listing. */
router.get('/', function(req, res, next) {

    Vaccination_graphModel.Vaccination_graphModel((err, result) => {
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