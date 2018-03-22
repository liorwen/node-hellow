const express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.use(express.static(__dirname + '/build'));
app.get('/',function (req, res) {
    res.sendFile('index.html');
});

app.listen(8080, ip);

module.exports = app;
