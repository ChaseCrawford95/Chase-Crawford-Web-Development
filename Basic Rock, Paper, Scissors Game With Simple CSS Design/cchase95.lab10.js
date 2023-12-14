function Tie(value, ChossenRandomHand){
    document.getElementById("YourHand").textContent = `${value}`
    document.getElementById("MyHand").textContent = `${ChossenRandomHand}`
    document.getElementById("Winner").textContent = "It's a tie!"
}
function UserWin(value, ChossenRandomHand){
    document.getElementById("YourHand").textContent = `${value}`
    document.getElementById("MyHand").textContent = `${ChossenRandomHand}`
    document.getElementById("Winner").textContent = "You win!"
}
function ComputerWin(value, ChossenRandomHand){
    document.getElementById("YourHand").textContent = `${value}`
    document.getElementById("MyHand").textContent = `${ChossenRandomHand}`
    document.getElementById("Winner").textContent = "Computer wins!"
}

function test(value){
    var RandomHand = []
    RandomHand.push("rock","paper", "scissors")
    var ChossenRandomIndex = Math.floor(Math.random() * RandomHand.length)
    var ChossenRandomHand = RandomHand[ChossenRandomIndex]
    console.log(ChossenRandomHand)

    if(value === "Rock" && ChossenRandomHand === "rock"){
        return Tie(value, ChossenRandomHand)
    }
    else if (value === "Rock" && ChossenRandomHand === "scissors"){
        return UserWin(value, ChossenRandomHand)
    }
    else if (value === "Rock" && ChossenRandomHand === "paper"){
        return ComputerWin(value, ChossenRandomHand)
    }
    else if(value === "Paper" && ChossenRandomHand === "paper"){
        return Tie(value, ChossenRandomHand)
    }
    else if(value === "Paper" && ChossenRandomHand === "rock"){
        return UserWin(value, ChossenRandomHand)
    }
    else if(value === "Paper" && ChossenRandomHand === "scissors"){
        return ComputerWin(value, ChossenRandomHand)
    }
    else if (value === "Scissors" && ChossenRandomHand === "scissors"){
        return Tie(value, ChossenRandomHand)
    }
    else if (value === "Scissors" && ChossenRandomHand === "paper"){
        return UserWin(value, ChossenRandomHand)
    }
    else if (value === "Scissors" && ChossenRandomHand === "rock"){
        return ComputerWin(value, ChossenRandomHand)
    }
    else{
        
    }
}
// Sources
// I wanted to figure out how to make JS manipulate certain parts of a <p> tag. W3Schools showed me how to use template literals: https://www.w3schools.com/js/js_string_templates.asp
// I wanted to figure out how to choose a random element from an array. I learned this from this website: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ 