//express has its own set of functions
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
//calling express/invoking express() is creating app that can listen/use middleware CRUD comes with incoking express()
const app = express();
//express.Router and express.static

app.use(morgan("dev"));

const staticMiddleware = express.static(__dirname + "public");
app.use(staticMiddleware);

app.use(bodyParser.urlencode({ extend: true }));
