const express = require('express');
const UserModel = require('../models/User')

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    UserModel.all((err, result) => {
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
