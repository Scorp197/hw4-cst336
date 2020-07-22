// JavaScript File
const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require("faker");

//routes
app.get("/", function(req, res){
    res.render("index.html")
});

app.get("/virus", function(req, res){
    res.render("virus.html");
});

app.get("/worm", function(req, res){
    res.render("worm.html");
});

app.get("/trojan", function(req, res){
    res.render("trojan.html", {
        words: faker.random.word()
    });
    
});

app.get("/extra", function(req, res){
    res.render("extra.html");
     
    });
    

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
    
});

