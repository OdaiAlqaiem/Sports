alert("Welcome to Sports website")

var name = prompt("What is your name")
alert("Happy to meet you " + name)

alert("This site calculates your age")
var age = prompt("What is your age ")
age = 2021 - age
alert("you were born in this year " + age)

<<<<<<< HEAD
if (age >= 20) {

  var favplayer = prompt("What is favourite player (Zedan , Maradona) ? ")

  while (favplayer != "Zedan" && favplayer != "Maradona"){
    favplayer = prompt("you intered wrong chooses please try again")
  }


  var counter = prompt("How many items do you want ? " + favplayer)
  console.log("the number of items =" + counter);


  if (favplayer == "Zedan") {
    document.write("<p>" + "great player in the history Zedan we have it here so you van watch it" + "</p>")
  }

  else if (favplayer == "Maradona") {
    document.write("<p>" + "great player in the history Maradona we have it here so you van watch it" + "</p>")
  }

  else {
    alert("Sorry, that is not found")
  }
=======
var favplayer = prompt("What is favourite player (Zedan , Maradona) ? ")

if (favplayer == "Zedan") {
  document.write("<p>" + "great player in the history Zedan we have it here so you van watch it" + "</p>")
}

else if (favplayer == "Maradona") {
  document.write("<p>" + "great player in the history Maradona we have it here so you van watch it" + "</p>")
}

else {
  alert("Sorry, that is not found")
>>>>>>> 07265f522e867117f53d707f6ded9991c69cec48
}














