//Logic for dicebag

document.getElementById("diceBag").onclick = function() {
   var input = prompt("How many sides do you want your dice to have?")
   var regex = /[0-9]/;
   var displayAnswer = [];
   if (input.match(regex)) {
    var inputStr = parseInt(input)
    var inputSecond = prompt("How many of this dice would you like to roll?")
        if (inputSecond.match(regex)) {
            var inputSecondStr = parseInt(inputSecond)
            for (i = 0; i < inputSecondStr; i++) {
                var answer = Math.ceil(Math.random() * inputStr)
                displayAnswer.push(answer)
        }
   }
   } else {
    window.alert("You must input a number")
    return;
   }
   window.alert("Your rolls are: " + displayAnswer + " !")
   bag.push(displayAnswer)
   addToLocalStorage("diceBag", bag)
}

//function to call and overwrite localstorage
function addToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

//function to retrieve value of localstorage
function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
