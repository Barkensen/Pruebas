function sumar(n1, n2) {

    return n1 + n2;
    return this.resultado;
}


(function () {

    var r = sumar(15, 20);

    alert(r);

    var obj = { base: 22, altura: 44 }; //json

    //apply y call
    var args = [5, 23];
    var rr = sumar.apply(obj, args);
    var rrr = sumar.call(obj, 5, 23);

    alert("Con apply" + rr);
    alert("Con call" + rrr);

    alert(obj.resultado);


})();