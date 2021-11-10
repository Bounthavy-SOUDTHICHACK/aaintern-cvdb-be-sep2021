const express = require('express');
const Vaccinated_todaynModel = require('../models/Vaccinted_today')

const router = express.Router();

/* GET Province's vaccined listing. */
router.get('/', function(req, res, next) {

    Vaccinated_todaynModel.Vaccinated_today((err, result) => {
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