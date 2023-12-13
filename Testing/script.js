// Define a class with four attributes
class MyClass {
    constructor(name, age, email, location) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.location = location;
    }
}

var item1 = new MyClass("John", 30, "example@gmail.com", "New York");
var item2 = new MyClass("Carl", 29, "example@gmail.com", "Chicago");
var allInstances = [item1, item2];

function getPairInputs(value) {
    var inputInstance;
    for (var i = 0; i < allInstances.length; i++) {
        var instance = allInstances[i];
        if (value === instance.name) {
            inputInstance = instance;
        
        }
    }

    // Create an instance of the class defined in JSmain.js
    var myObject = inputInstance;

    // Store the object in local storage for later retrieval
    localStorage.setItem("myObject", JSON.stringify(myObject));

    // Open nextPage.html
    window.location.href = "nextPage.html";
}

// Check if we are on nextPage.html





