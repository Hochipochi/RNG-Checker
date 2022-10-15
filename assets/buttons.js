// This file will contain the onclick functions for each button
// on the webpage. The buttons will link to the logic.js
//file. 

document.getElementById("coin").onclick = function() {
    var number = Math.random();
    if (number < 0.5) {
        window.alert("Your Coin landed on Heads!")
        //return value ++ for writing to storage
    } else {
        window.alert("Your Coin landed on Tails!")
    }

}

document.getElementById("dSix").onclick = function() {
    var answer = Math.ceil(Math.random() * 6)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dTen").onclick = function() {
    var answer = Math.ceil(Math.random() * 10)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dTwelve").onclick = function() {
    var answer = Math.ceil(Math.random() * 12)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dTwenty").onclick = function() {
    var answer = Math.ceil(Math.random() * 20)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dHundred").onclick = function() {
    var answer = Math.ceil(Math.random() * 100)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("qMark").onclick = function() {
    var input = prompt("What number would you like to use to test your RNG?")
    var inputStr = parseInt(input)
    var answer = Math.ceil(Math.random() * inputStr)
    window.alert("You rolled a: " + answer + " out of " + inputStr + " !")
}