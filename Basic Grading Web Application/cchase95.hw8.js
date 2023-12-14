function test(){
    let input = prompt("Please enter a number");
    document.getElementById("GR").innerHTML = input
    switch(true){
        case input === null || input.trim() === "":
            document.getElementById("GR").innerHTML = "Invalid Input"
            document.getElementById("Grade").innerHTML = "Grade: "
            document.getElementById("LetterGrade").innerHTML="Letter Grade: "
            document.getElementById("Reward").innerHTML="Reward: Nothing! Please put in a valid number"
        case isNaN(input):
            document.getElementById("GR").innerHTML = "Invalid Input"
            document.getElementById("Grade").innerHTML = "Grade: "
            document.getElementById("LetterGrade").innerHTML="Letter Grade: "
            document.getElementById("Reward").innerHTML="Reward: Nothing! Please put in a valid number"
            break;
        case input >= 90:
            console.log("A")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LetterGrade").innerHTML="Letter Grade: A"
            document.getElementById("Reward").innerHTML="Reward: Candy"
            break;    
        case input >= 80 && input <= 89:
            console.log("B")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LetterGrade").innerHTML="Letter Grade: B"
            document.getElementById("Reward").innerHTML="Reward: Apple"
            break;
        case input >= 70 && input <=79:
            console.log("C")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LetterGrade").innerHTML="Letter Grade: C"
            document.getElementById("Reward").innerHTML="Reward: Mint"
            break;
        case input >= 60 && input <= 69:
            console.log("D")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LetterGrade").innerHTML="Letter Grade: D"
            document.getElementById("Reward").innerHTML="Reward: Pencil"
            break;
        case input < 60 :
            console.log("F")
            document.getElementById("Grade").innerHTML="Grade: " + input
            document.getElementById("LetterGrade").innerHTML="Letter Grade: F"
            document.getElementById("Reward").innerHTML="Reward: Awkward conversation with parents"
            break;
    }

}
// Sources
// I wanted to figure out how to make a button be used to open up the prompt function. Also how to make a button work in conjucntion with a JavaScript Function. I got help from w3schools with this example: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
// That same example also helped me figure out how to make a JavaScript file manipulate certain tags on the HTML file
// I had to figure out how to handle inputs that included words, letters, open blank spaces, and nothing inputted at all by the user. ChatGPT suggested I use .trim() function to handle any open white space input. 