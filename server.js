//importing path,express,handlebars,router
var path = require("path");
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");

//setting up port
var HTTP_PORT = process.env.PORT || 8080;
//setting static folder
app.use(express.static("static"));

//setting up engine
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

//function when server starts
function onHttpStart() {
  console.log("Expres http server listening on: " + HTTP_PORT);
}

//route to /
const generalController = require("./controllers/general");
app.use("/", generalController);

//route to wrong paths
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);
