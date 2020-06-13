const express = require("express");
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set("port",process.env.PORT || 5000);

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(app.get("port"),function(){
    console.log(`Listening on port ${app.get("port")}...`);
});
