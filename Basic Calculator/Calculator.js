var array1 = [];
var array2 = [];
var array3 = [];


function displaynum(number){
    var textfield = document.getElementById("Text_Field")
    textfield.value += number;
}


function ClearTextField(){
    var textfield = document.getElementById("Text_Field")
    textfield.value = "";
    array1=[];
    array2=[];
    array3=[];
}

function addthesenums(){
    var textfield = document.getElementById("Text_Field")
    var input = textfield.value;
    array1.push(input);
    array2.push("+");
    textfield.value = "";
}

function minthesenums(){
    var textfield = document.getElementById("Text_Field")
    var input = textfield.value;
    array1.push(input);
    array2.push("-");
    textfield.value = "";
}

function multithesenums(){
    var textfield = document.getElementById("Text_Field")
    var input = textfield.value;
    array1.push(input);
    array2.push("x");
    textfield.value = "";
}

function divthesenums(){
    var textfield = document.getElementById("Text_Field")
    var input = textfield.value;
    array1.push(input);
    array2.push("/");
    textfield.value = "";
}

function equals(){
    var textfield = document.getElementById("Text_Field")
    var input = textfield.value;
    array3.push(input)
    textfield.value="";
    
    
        if(array2.includes("+")){
            var answer = parseInt(array1[0]) + parseInt(array3[0]);
            textfield.value = answer;
            array1=[]
            array2=[]
            array3=[]
            console.log(answer);
        }
        else if(array2.includes("-")){
            var answer = parseInt(array1[0]) - parseInt(array3[0]);
            textfield.value = answer;
            array1=[]
            array2=[]
            array3=[]
            console.log(answer);
        }
        else if(array2.includes("x")){
            var answer = parseInt(array1[0]) * parseInt(array3[0]);
            textfield.value = answer;
            array1=[]
            array2=[]
            array3=[]
            console.log(answer);
        }
        else if(array2.includes("/")){
            var answer = parseInt(array1[0]) / parseInt(array3[0]);
            textfield.value = answer;
            array1=[]
            array2=[]
            array3=[]
            console.log(answer);
        }

        
        array1=[]
        array2=[]
        array3=[]
}




