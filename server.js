const express = require('express');
let app = express();

app.use(express.static('seiten'));

app.get("/",function (req, res) {
    res.render('index');
});

app.listen(3000);