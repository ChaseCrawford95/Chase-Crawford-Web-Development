function invalid(){
    document.getElementById("Input").innerHTML = "Invalid"
    document.getElementById("YourHand").innerHTML = "Your Hand: Invalid"
    document.getElementById("MyHand").innerHTML = "My Hand:"
    document.getElementById("Winner").innerHTML = "Winner: NO ONE!"
}
function Tie(input, changedinput, ChossenRandomHand){
    document.getElementById("Input").innerHTML = input
    document.getElementById("YourHand").innerHTML = "Your Hand: " + changedinput
    document.getElementById("MyHand").innerHTML = "My Hand: " + ChossenRandomHand
    document.getElementById("Winner").innerHTML = "Winner: TIE!"
}
function UserWin(input, changedinput, ChossenRandomHand){
    document.getElementById("Input").innerHTML = input
    document.getElementById("YourHand").innerHTML = "Your Hand: " + changedinput
    document.getElementById("MyHand").innerHTML = "My Hand: " + ChossenRandomHand
    document.getElementById("Winner").innerHTML = "Winner: YOU!"
}
function ComputerWin(input, changedinput, ChossenRandomHand){
    document.getElementById("Input").innerHTML = input
    document.getElementById("YourHand").innerHTML = "Your Hand: " + changedinput
    document.getElementById("MyHand").innerHTML = "My Hand: " + ChossenRandomHand
    document.getElementById("Winner").innerHTML = "Winner: COMPUTER!"
}

function test(){
    var RandomHand = []
    RandomHand.push("rock","paper", "scissors")
    var ChossenRandomIndex = Math.floor(Math.random() * RandomHand.length)
    var ChossenRandomHand = RandomHand[ChossenRandomIndex]
    console.log(ChossenRandomHand)
    let input = prompt("Please select between Rock, Paper, or Scissors");
    let changedinput = input.toLowerCase();
    document.getElementById("Input").innerHTML = changedinput

    if(changedinput === null || changedinput.trim() ==="" ){
        return invalid()
    }
    else if(changedinput === "rock" && ChossenRandomHand === "rock"){
        return Tie(input, changedinput, ChossenRandomHand)
    }
    else if (changedinput === "rock" && ChossenRandomHand === "scissors"){
        return UserWin(input, changedinput, ChossenRandomHand)
    }
    else if (changedinput === "rock" && ChossenRandomHand === "paper"){
        return ComputerWin(input, changedinput, ChossenRandomHand)
    }
    else if(changedinput === "paper" && ChossenRandomHand === "paper"){
        return Tie(input, changedinput, ChossenRandomHand)
    }
    else if(changedinput === "paper" && ChossenRandomHand === "rock"){
        return UserWin(input, changedinput, ChossenRandomHand)
    }
    else if(changedinput === "paper" && ChossenRandomHand === "scissors"){
        return ComputerWin(input, changedinput, ChossenRandomHand)
    }
    else if (changedinput === "scissors" && ChossenRandomHand === "scissors"){
        return Tie(input, changedinput, ChossenRandomHand)
    }
    else if (changedinput === "scissors" && ChossenRandomHand === "paper"){
        return UserWin(input, changedinput, ChossenRandomHand)
    }
    else if (changedinput === "scissors" && ChossenRandomHand === "rock"){
        return ComputerWin(input, changedinput, ChossenRandomHand)
    }
    else{
        return invalid()
    }
}
// Sources
// I wanted to figure out how to make a button be used to open up the prompt function. Also how to make a button work in conjucntion with a JavaScript Function. I got help from w3schools with this example: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
// That same example also helped me figure out how to make a JavaScript file manipulate certain tags on the HTML file
// I wanted to figure out how to choose a random element from an array. I learned this from this website: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/