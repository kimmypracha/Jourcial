const express  = require('express');
const app = express();
const path = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Your node is running.");
});
