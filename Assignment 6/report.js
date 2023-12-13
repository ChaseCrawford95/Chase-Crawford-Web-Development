
function formSubmission(event){
    event.preventDefault();
    var UserName = document.getElementById("UserNameTag").value;
    var Password = document.getElementById("PasswordTag").value;

    var DataForm = [UserName,Password];
    var ErrorMessages = [];
    var PasswordString = DataForm[1]
    var HasUpperCase = false;
    var HasLowerCase = false;
    var HasNumberAtEnd = false;
    
    var LastItem = PasswordString[PasswordString.length-1]
    
    for(var i = 0; i<PasswordString.length; i++){
        if(PasswordString[i]>='a' && PasswordString[i]<='z'){
            HasLowerCase = true;
        }
        if(LastItem>='0'&& LastItem<='9'){
            HasNumberAtEnd = true;
        }
        if(PasswordString[i]>='A' && PasswordString[i]<='Z'){
            HasUpperCase = true;
        }

    }
    
    if(HasLowerCase){
        console.log("The Password of: ",DataForm[1],"has a lower case letter in it");
    }
    else{
        ErrorMessages.push("You did not use a lowercase character.")
    }
    if(HasNumberAtEnd){
        console.log("The Password of: ",DataForm[1],"has a number at the end of it.");
    }
    else{
        ErrorMessages.push("You did not end your password with a number.");
    }
    if(HasUpperCase){
        console.log("The Password of: ",DataForm[1],"has a uppercase letter in it");
    }
    else{
        ErrorMessages.push("You did not use an uppercase character.");
    }
    if(DataForm[1].length>=8){
        console.log("The Password of: ",DataForm[1]," has at least 8 characters or more");
    }
    else{
        ErrorMessages.push("You did not make your password at least 8 characters long");
    }
    console.log(ErrorMessages);
    console.log(DataForm[0],DataForm[1]);
    var ERMString = JSON.stringify(ErrorMessages);
    localStorage.setItem("ErrorMessages",ERMString);
    
    window.location.href = "report.html";
    
    
}
//Sources:
//Chatgpt helped me with understading how to get inputs to stay on the console for viewing. This would be line 3: event.preventDefault()
//Chatgpt helped me with understanding how to make a page be opened after a submit button was pushed. This would be line 58: window.location.href = "report.html";
//Chatgpt helped me with understanding how to transfer data locally from one html page to another html page. This would be line 55 to 56: var ERMString = JSON.stringify(ErrorMessages); window.location.href = "report.html";