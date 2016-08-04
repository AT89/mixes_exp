var express = require("express");
var app = express();
mixes = require("./data/mixes.js");
app.set("view engine", "hbs");
app.use(express.static("public"));


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
// for (i=0; i< mixes.length; i++){

//create div functions
function makemixes(mixes){
  console.log("makemixesfunc");

// //
// //     console.log("mixes[i].image")

      // '<div><img src=' + mixes[0].image + '</img></div>'
return mixes[0].image
}

app.get("/", function(req, res){
  res.render("index", {
    compliment: shuffle(compliments),
    color: shuffle(colors2),
    colorbg: shuffle(colors),
    mixfeed: makemixes(mixes)
    // res.send("<div class='mixes'> insertimage </div>")

  })
});


app.listen(1337, function(){
  console.log("app listening on port 1337 skeet skeet");
})
