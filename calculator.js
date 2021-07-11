const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var num1=parseFloat(req.body.num1);
  var num2=parseFloat(req.body.num2);
  var result=num1/(num2*num2);

  res.send("Your BMI is " + result);
});

app.listen(3000,function(){
  console.log("Server is listening to port 3000.");
});
