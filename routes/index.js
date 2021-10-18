var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    return res.json({
        status: 200,
        message: 'OK'
    })

});

module.exports = router;
