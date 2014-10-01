function espar(numero1) {

    return numero1 % 2 == 0;
}
//var numero = prompt("Dime un número");


for (var i = 0; i < 10; i++) {
    document.write("El numero" + i + (espar(i) ? "es par" : "no es par"));
    document.writeln("<br />")
}
