const express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080, ip);

module.exports = app;
