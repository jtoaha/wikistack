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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res, next) => {
   res.send("Hello World");
});

const PORT = 1377;

app.listen(PORT, () => {
  console.log( `App listening in port ${PORT}`)
});


//hi june this is what I installed:
// 1) npm install express
// 2) Install nodemon with npm install nodemon --save-dev
// 3) Now open your project folder and change or add the scripts.start key in package.json to say nodemon instead of node, like this:

// "scripts": {
//   "start": "nodemon ./path/to/your/app.js" <<add this line to the scripts section
// },  and that's as far as I got so far
