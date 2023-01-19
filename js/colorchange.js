

function colorchange() { 
    var hex = document.getElementById("colorChange").value; 

    document.getElementById("result").style.color = hex;

}

document.getElementById("colorChange").addEventListener("keyup", colorchange);