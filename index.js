const express = require("express");
const app = express();
const chalk = require('chalk');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
const success = chalk.bold.blue;
const error = chalk.bold.red;

app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/index2", function(req, res){
    res.render("index2.html");
});

app.get("/index3", function(req, res){
    res.render("index3.html"); 
});

app.get("/index4", function(req, res){
    res.render("index4.html");
});

app.get("*", function(req, res){
    res.send("Error Page Not Found");
    console.log(error("Error found! Please fix or make sure correct page is being searched."))
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log(success("Running Express Server..."));
});