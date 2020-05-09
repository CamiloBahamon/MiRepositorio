const express=require('express');
const proyectoredes=express();
const http=require('http').Server(proyectoredes);
proyectoredes.use(express.static(__dirname+"/public"));
proyectoredes.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
http.listen(80,()=>{
    console.log('Se inicio el servidor');
});
