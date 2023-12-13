if (window.location.href.includes("nextPage.html")) {
    var storedObject = localStorage.getItem("myObject");
    var myObject = JSON.parse(storedObject);
    var displayDiv = document.getElementById("displayObject");
    var displayDiv2 = document.getElementById("displayObject2")
        
    displayDiv.innerHTML = `<p>Name: ${myObject.name}</p>`;
    displayDiv2.innerHTML = `<p>Age: ${myObject.age}</p>`;
    
}