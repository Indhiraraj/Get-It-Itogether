import express from "express";
import bodyParser from "body-parser";
import {date} from "./date.mjs";


var tasks=[];

var works = [];

const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))

app.get("/",function(req,res){
    res.render("home")
})


app.get("/todo",function(req,res){

    const day = date();
    

 
    res.render("list",{pageTitle: day,NewTask: tasks})
    
})

app.post("/",function(req,res){
    
    var task=req.body.newTask

    if(req.body.title === "Work"){

        works.push(task)
        res.redirect("/work")

    }

    else{
        tasks.push(task)
        res.redirect("/todo")
    }
    
    
})

app.get("/work",function(req,res){
    res.render("list",{pageTitle: "Work",NewTask: works})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.get("/contact",function(req,res){
    res.render("contact")
})

app.listen(3000,function(){
    console.log("server start at port 3000")
})