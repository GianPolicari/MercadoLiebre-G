const express = require("express");
const path = require("path");

const app = express();

const publicPath= path.resolve(__dirname, "./public");
app.use( express.static(publicPath) );

app.get("/404", (req, res) => {
    res.send("Error página no encontrada");
  });

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("./views/home.html"));
})
app.listen(3000,()=>{
    console.log("El sevido esta conectado al puerto 3000");
     
});