var express = require("express");
var app = express();
var mixes = require("./data/mixes.js");
app.set("view engine", "hbs");
app.use(express.static("public"))







var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "you are a beautiful person"
];



//create div functions


function shuffle(array){
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array[0];
}




app.get("/", function(req, res){
  res.render("index", {
    compliment: shuffle(compliments),
    color: shuffle(colors),
    colorbg: shuffle(colors)
    //mixes:mixes create something here for all the information
  })
});


app.listen(1337, function(){
  console.log("app listening on port 1337 skeet skeet");
})
