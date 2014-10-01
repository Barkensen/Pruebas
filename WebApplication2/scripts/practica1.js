numero=0;
arrayNumeros = [];
seguir=true;
suma = 0;

do {
    numero = prompt("Introduce numero");
    if (!isNaN(numero)) {

        arrayNumeros.push(numero);
    }
    else { seguir = false; }
}
while (seguir);

for (var i = 0; i < arrayNumeros.length; i++) {
    suma += parseInt(arrayNumeros[i]);
}

media = (suma / arrayNumeros.length);
alert("Esta es la suma: " + suma);
//alert(media);
var objetoMedia = { valorMedia: media };