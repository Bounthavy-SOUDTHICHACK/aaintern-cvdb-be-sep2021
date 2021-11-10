const express = require('express');
const Deaths_caseModel = require('../models/Deaths_case')

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    Deaths_caseModel.Deaths_case((err, result) => {
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
