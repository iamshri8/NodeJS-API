const express = require('express');
const router = express.Router();
const NetworkData = require('../models/networkData');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/register', function(req, res, next) {
    NetworkData.find({networkName : req.query.networkName}).then(function (data) {
        res.send(data);

    });
});

router.post('/register', function(req, res, next) {
    NetworkData.create(req.body).then(function (data) {
        console.log('inside  post');
        res.send("success");
    });
});

router.put('/register/:id', function(req, res, next) {
    res.send( {type : 'PUT'} );
});

router.delete('/register/:id', function(req, res, next) {
    res.send( {type : 'DELETE'} );
});

module.exports = router;
