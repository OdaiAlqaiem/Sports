alert("Welcome to Sports website")

var name = prompt("What is your name")
alert("Happy to meet you " + name)

alert("This site calculates your age")
var age = prompt("What is your age ")
age = 2021 - age
alert("you were born in this year " + age)

var favplayer = prompt("What is favourite player (Zedan , Maradona) ? ")

if (favplayer == "Zedan") {
  document.write("<p>" + "great player in the history Zedan we have it here so you van watch it" + "</p>")
}

else if (favplayer == "Maradona") {
  document.write("<p>" + "great player in the history Maradona we have it here so you van watch it" + "</p>")
}

else {
  alert("Sorry, that is not found")
}







