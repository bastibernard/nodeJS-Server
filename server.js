/**
 * Created by Sebastian on 06.05.14.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/',function(req,res){
    res.send("Hello MME2");
})
app.listen("1234");
