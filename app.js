var express = require("express");
var app = express();

var multer = require("multer");
var upload = multer({dest:"uploads/"});

app.set("view engine","pug");
app.set("views","./views");

app.get("/",function(req,res){
	res.render("index");
});

app.post("/",upload.single("data"),function(req,res){
	console.log(req.file);
	res.json({"size":req.file.size});
})

app.listen(3000,()=>{
	console.log("on air");
})