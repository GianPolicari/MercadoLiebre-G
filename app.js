const express = require("express");
const path = require("path");


const port = process.env.PORT || 3000;

const app = express();

app.use( express.static("public"));

app.get("/404", (req, res) => {
    res.send("Error página no encontrada");
  });

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("./views/home.html"));
})
app.listen(port, ()=>{
    console.log("El sevido esta conectado al puerto 3000");
     
});