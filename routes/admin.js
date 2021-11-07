const express = require('express');
const AdminModel = require('../models/Admin')

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    AdminModel.getAdminInformation((err, result) => {
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
