const express = require("express");
const path = require("path");


const port = process.env.PORT || 2003;

const app = express();

app.use( express.static("public"));

app.get("/404", (req, res) => {
    res.send("Error página no encontrada");
  });

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.listen(port, ()=>{
    console.log("El sevido esta conectado al puerto 2003");
     
});