// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World - This is me!');
});

var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } 
    if (choice1 === "rock") {
        if (choice2 === scissors) {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === scissors) {
            return "scissors wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === rock) {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
};

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});