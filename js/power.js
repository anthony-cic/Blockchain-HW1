// hello 



// Function to get two numbers and add them together
function power() {
    // Find the items in the HTML page, and get their values
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("powerResult").innerHTML = "Invalid input";
        return;
    }
    
    var base = parseInt(num1); 
    var power = parseInt(num2);
    for (var i = 1; i < power; i++) {
        base = base * base; 
    }

    // If we got some output that isn't a number...
    if (isNaN(base)) {
        // Print an error on bad input
        document.getElementById("powerResult").innerHTML = "Invalid input";
    } else {
        // Otherwise, add the result to the HTML document
        document.getElementById("powerResult").innerHTML = base;
    }
}

// Add event listeners so the functions are called whenever the input changes
document.getElementById("num1").addEventListener("keyup", power);
document.getElementById("num2").addEventListener("keyup", power);