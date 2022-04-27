const express = require("express");
const app = express();
const morgan = require("morgan");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));//Entender datos de un form sencillos
app.use(express.json());//Recibir y entender formatos JSON

// Routes
app.use("/api/movies", require("./routes/movies"));//Todas estas rutas empiezan con api/movies
//app.use("/api/users", require("./routes/users"));

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});