//Global variables for history
var flip = [];
var six = [];
var eight = [];
var ten = [];
var twelve = [];
var twenty = [];
var hundred = [];
var custom = [];
var bag = [];

//logic for dice + custom roll 

document.getElementById("coin").onclick = function() {
    var number = Math.random();
    if (number < 0.5) {
        window.alert("Your Coin landed on Heads!")
    } else {
        window.alert("Your Coin landed on Tails!")
    } flip.push(number)
    addToLocalStorage("flip", flip)


}

document.getElementById("dSix").onclick = function() {
    var answer = Math.ceil(Math.random() * 6)
    six.push(answer)
    addToLocalStorage("dSix", six)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dEight").onclick = function() {
    var answer = Math.ceil(Math.random() * 8)
    eight.push(answer)
    addToLocalStorage("dEight", eight)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dTen").onclick = function() {
    var answer = Math.ceil(Math.random() * 10)
    ten.push(answer)
    addToLocalStorage("dTen", ten)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dTwelve").onclick = function() {
    var answer = Math.ceil(Math.random() * 12)
    twelve.push(answer)
    addToLocalStorage("dTwelve", twelve)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dTwenty").onclick = function() {
    var answer = Math.ceil(Math.random() * 20)
    twenty.push(answer)
    addToLocalStorage("dTwenty", twenty)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("dHundred").onclick = function() {
    var answer = Math.ceil(Math.random() * 100)
    hundred.push(answer)
    addToLocalStorage("dHundred", hundred)
    window.alert("You rolled a: " + answer + " !")
}

document.getElementById("qMark").onclick = function() {
    var input = prompt("What number would you like to use to test your RNG?")
    var regex = /[0-9]/;
    if (input.match(regex)) {
        var inputStr = parseInt(input)
        var answer = Math.ceil(Math.random() * inputStr)
        window.alert("You rolled a: " + answer + " out of " + inputStr + " !")
        custom.push(answer)
        addToLocalStorage("qMark", custom)
    } else {
        window.alert("You must input a number")
    }
}

//onclick function for button history to show the alert
document.getElementById("buttonHistory").onclick = function() {
    six = getFromLocalStorage("dSix")
}


//onclick function to clear localstorage