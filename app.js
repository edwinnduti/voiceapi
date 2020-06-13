const express = require("express");
const app = express();

app.set("port",process.env.PORT || 5000);

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(app.get("port"),function(){
    console.log(`Listening on port ${app.get("port")}...`);
});
