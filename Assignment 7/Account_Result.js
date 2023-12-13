function formSubmission(event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get("Email");
    const password = formData.get("Password");
    const confirmPassword = formData.get("ConfirmPassword");

    const errorMessages = [];

    if (!password.match(/[a-z]/)) {
        errorMessages.push("You did not use a lowercase character.");
    }
    if (!password.match(/[A-Z]/)) {
        errorMessages.push("You did not use an uppercase character.");
    }
    if (!password.match(/\d$/)) {
        errorMessages.push("You did not end your password with a number.");
    }
    if (password.length < 8) {
        errorMessages.push("Your password must be at least 8 characters long.");
    }
    if (password !== confirmPassword) {
        errorMessages.push("You did not confirm your password correctly.");
    }
    console.log(errorMessages);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/form", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE){
            if (xhr.status === 200) {
                console.log(xhr.responseText);
                window.location.href = "Account_Result.html";
            }
            else{
                console.error("Failed to submit the form.");
            }
        }
    };
    const urlEncodedData = new URLSearchParams(formData).toString();
    xhr.send(urlEncodedData);
}

//Sources:
//Chatgpt helped me with understading how to get inputs to stay on the console for viewing. This would be line 3: event.preventDefault()
//Chatgpt helped me with understanding how to make a page be opened after a submit button was pushed. This would be line 35: window.location.href = "report.html";
//Chatgpt halepd me with understading how to use AJAX to send and recieve data from the database that was created. This would be from lines 28 to 43.