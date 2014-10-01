var n1 = prompt("Dime el numero 1");
var n2 = prompt("Dime el numero 2");

if (isNaN(n1) || isNaN(n2)) {
    alert("Error, sólo números")
}

else {

    var n3 = n1 / n2;

    if (isFinite(n3)) {
        alert(n3);
    }
    else {
        alert("La operación es infinita");
    }
}