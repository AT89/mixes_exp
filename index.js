var express = require("express");
var app = express();
var mixes = require("./data/mixes.js");
app.set("view engine", "hbs");
app.use(express.static("public"))



////////////////////////////////////////////////////////////
///////////EMERGENCY COMPLIMENTS////////////////////////////
////////////////////////////////////////////////////////////
var colors2 = ["#FFFFFF"];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "you are a beautiful person",
  "You are a Pokemon master",
  "You are #1 Genji NA",
  "Jet Fuel can't melt steel beams"
];


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

/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////////////////////////////////////////////


//create div functions
function makedivs(array){
  for (var i = 0; i < array.length; i++){

    $blockFeed.append(item);
  }
}


app.get("/", function(req, res){
  res.render("index", {
    compliment: shuffle(compliments),
    color: shuffle(colors2),
    colorbg: shuffle(colors)
    //mixes:mixes call function here to make divs!
  })
});


app.listen(1337, function(){
  console.log("app listening on port 1337 skeet skeet");
})
