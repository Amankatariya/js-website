import express from "express";
import path from "path"
// import server;
// const express =app()
const app=express();
const port=80;

app.use(express.static( path.join(path.resolve(),"public")))
// aka=aka.html;
// console.log(path.join(path.resolve(),"public"))
app.set("view engine", "ejs")
// console.log(`path.join(path.resolve(),"public"`)
app.get("/", (req,res)=>{
    // res.sendFile(path.join(path.resolve(),"public/home.html"));
    res.render("home");

})

app.get("/about", (req,res)=>{
    // res.send("this is about page");
    res.render("about")
})

app.get("/service", (req,res)=>{
    res.render("service")
    // res.send("this is service page");
    // res.statusCode=404;
    // res.sendStatus(404)
    // res.statusCode=500;
})



app.listen(port,()=>{
    console.log("we are good to go.......")
}) 