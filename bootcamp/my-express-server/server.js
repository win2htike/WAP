const express = require('express');
const app=express();


app.get('/', function(req,res){
    // console.log(request);
    res.send("<h1>Hello World!</h1>");
});

app.get('/contact', function(req,res){
    res.send("Contact me at: win.htike@miu.edu");
});

app.get('/about', function(req,res){
    res.send("This is Win Win from Myanmar.");
});
 
app.get('/hobbies', function(req,res){
    res.send("<ul><li> doing nothing </li></ul>");
});

app.listen(3000, function(){
    console.log('Server started on port 3000.');
});