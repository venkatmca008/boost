const express=require('express');
const app=express();

app.get("/",(req,res)=>{
 
res.send("wi am hear");
});

app.listen(3000,()=> {

console.log("Server is Up:")
});

