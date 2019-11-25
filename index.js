var express = require("express");
var app = express();

// app.use('/', require('./waec_index.html'));
//
// router.get('/', function (req, res) {
//     res.send('waec_index');
// })

// app.use('/css', express.static(__dirname + '/waec_demo/css'));
// app.use('/js', express.static(__dirname + '/waec_demo/js'));
// app.use('/images', express.static(__dirname + '/waec_demo/images'));

// app.get(a, function (req, res) {
//     // res.send('Hello World');
//
//     if (a === '/' || '/waec_index')
//         res.sendFile('waec_index.html');
//     else if( a === '/waec_faq')
//         res.sendFile('waec_faq.html');
//
// });
//


// const express = require('express');
//
// const app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(function (req, res, next){
//     if(req.headers['x-forwarded-proto'] === 'https'){
//         res.redirect('http://' + req.hostname + req.url);
//
//     }
//     else
//     {
//         next();
//     }
// });
//
app.use(express.static(__dirname + 'waec_demo'));

// app.listen(PORT, function () {
//     console.log('app started on port ' + PORT);
// });

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/waec_index.html');
});

app.get('/waec_index', function (req, res) {
    res.sendFile(__dirname + '/waec_index.html');
});

app.get('/waec_faq', function (req, res) {
    res.sendFile(__dirname + '/waec_faq.html');
});



var server = app.listen(8081, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});