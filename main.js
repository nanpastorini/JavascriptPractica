//ofreceremos un servicio de "obra social para mascotas". Los planes tendrán un costo inicial a 500 pesos para perros menores a un año de edad,
// e incrementará por cada año de mascota un 10% el valor de la cuota.  Por ejemplo , un cachorro de 10 meses pagará 500 pesos mensuales, 
//mientras que un perro de 2 años de edad debera pagar 500 + (50 * 2)

function edadPerro(){
    let edad = prompt ("Ingrese la edad de su perro");
    alert ("la edad ingresada es" + edad);
}


function calcularPlan(){
    costo=0;
    if (edadPerro<1) {
        costo=500;
    }
    else {
        if (edadPerro>=1){
            costo=500 + (50 * edadPerro);
        }
    }
    return costo;
}

//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}