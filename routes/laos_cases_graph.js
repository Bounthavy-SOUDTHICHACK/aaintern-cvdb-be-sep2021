const express = require('express');
const LaosCasesGraphModel = require('../models/Laos_cases_graph')

const router = express.Router();

/* GET Emergency Contact listing. */
router.get('/', function(req, res, next) {

    LaosCasesGraphModel.Laos_casaes_update((err, result) => {
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
