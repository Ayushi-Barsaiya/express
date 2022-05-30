
// Below code is for simply getting a data by sending req from express: 
// -------------------

// console.log("hello from first script");
// const express = require("express");
// const app = express()

// app.use((req, res)=>{
//     console.log("we got a new request!!");
//     res.send("<h1>This is my webPage</h1>");
// }) 
// app.listen(3000,()=>{
//     console.log("listening on port 3000....")

// })


//for routing basics
//---------------------

const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit} = req.params;
    res.send(`browsing the ${subreddit}`)
})

app.get('/cats',(req,res)=>{
    res.send("meow!!")
})

app.get('/dogs',(req,res)=>{
    res.send("woof")
})

app.get('/',(req,res)=>{
    res.send("this is the home page.")
})

app.get('*',(req,res)=>{
    res.send("we dont know that path")
})
// cats--> meow
//dogs--> woof
// "/"

app.listen(3000,()=>{
    console.log("listening to port 3000...");
})