window.addEventListener("load", createCalculator);
document.getElementById("cal").addEventListener("click", calc);
document.getElementById("dlt").addEventListener("click", clear);

function createCalculator(){

    for(var i =0; i<=9; i++)
        {
           createButton(i);
        }
        var arr = ["+" , "-" , "*" , "/" ]
    for(var i=0; i<arr.length ; i++)
    {
        createButton(arr[i]);
    }
}   

function createButton(number){
    var button = document.createElement("button");
    button.innerHTML = number;
    button.addEventListener("click", function () {

        add_to_cal(number)
        document.getElementById("area").innerHTML = to_cal;
    
    } )
    document.getElementById("buttons").appendChild(button);
}


function calc(){
    var result = eval(to_cal);
    console.log(result);
    document.getElementById("area").innerHTML = result;
    to_cal = "";
}

function clear(){
    document.getElementById("area").innerHTML = "";
    to_cal = "";
}