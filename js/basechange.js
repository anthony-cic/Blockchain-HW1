
function basechange() {
    var num = parseInt(document.getElementById("num").value);
    var base = document.getElementById("base").value; 

    if (base == "decimal") {
        document.getElementById("basechangeResult").innerHTML = num;
    }
    else if (base == "binary") {
        document.getElementById("basechangeResult").innerHTML = num.toString(2);
    }
    else {
        document.getElementById("basechangeResult").innerHTML = num.toString(8);
    }


}



// Add event listeners so the functions are called whenever the input changes
document.getElementById("num").addEventListener("keyup", basechange);
document.getElementById("base").addEventListener("change", basechange);