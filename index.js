const express = require("express");
const port = 3000;
const app = express();
const bodyParser = require("body-parser");

// This makes sure that you get all assets from the public folder
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware
app.use(timestampMiddleware);

/** Root-level Middleware - A logger */
// Chain middleware
app.get("/", (req, res, next) => {
  console.log("I'm a middleware...");
  console.log(req.method + " " + req.path + " " + req.path);
  next();
});

/** Serve an HTML file */
// Getting a file
app.get("/", (req, res) => {
  res.sendFile("index");
});

/** Chaining middleware. A Time server */
app.get(
  "/now",
  function (req, res, next) {
    next();
  },
  function (req, res) {
    var time = new Date().toString();
    res.json({ time: time });
  }
);

app.listen(port, () => {
  console.log("Listening on 3000");
});
