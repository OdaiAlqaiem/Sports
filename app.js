alert("Welcome to Sports website")

var name = prompt("What is your name")
alert("Happy to meet you " + name)

alert("This site calculates your age")
var age = prompt("What is your age ")
age = 2021 - age
alert("you were born in this year " + age)

favplayer(age);

function favplayer(agepar) {

  if (agepar >= 20) {

    var favplayer = prompt("What is favourite player (Zedan , Maradona) ? ")
  }
  else {
    alert("Sorry, that is not found")

  }

  while (favplayer != "Zedan" && favplayer != "Maradona") {
    favplayer = prompt("you intered wrong chooses please try again")
  }


  var counter = prompt("How many items do you want ? " + favplayer)
  console.log("the number of items =" + counter);

  for (var i = 0; i <= counter; i++) {

    document.write("<img src=https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2020/08/05093006/truth_english_football_hero.jpg ");

  }


  if (favplayer == "Zedan") {
    document.write("<p>" + "great player in the history Zedan we have it here so you van watch it" + "</p>")
  }

  else if (favplayer == "Maradona") {
    document.write("<p>" + "great player in the history Maradona we have it here so you van watch it" + "</p>")
  }


  else {
    alert("Sorry, that is not found")
  }
}


// var favplayer = prompt("What is favourite player (Zedan , Maradona) ? ")

// if (favplayer == "Zedan") {
//   document.write("<p>" + "great player in the history Zedan we have it here so you van watch it" + "</p>")
// }

// else if (favplayer == "Maradona") {
//   document.write("<p>" + "great player in the history Maradona we have it here so you van watch it" + "</p>")
// }

// else {
//   alert("Sorry that is not found")
// }



var footballNum = prompt("How many football do you rate our wrebsite ?")

for (var i = 0; i < footballNum; i++) {

  document.write("<img src=https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2020/08/05093006/truth_english_football_hero.jpg ");

}

