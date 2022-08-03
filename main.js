//ofreceremos un servicio de "obra social para mascotas". Los planes tendrán un costo inicial a 500 pesos para perros menores a un año de edad,
// e incrementará por cada año de mascota un 10% el valor de la cuota.  Por ejemplo , un cachorro de 10 meses pagará 500 pesos mensuales, 
//mientras que un perro de 2 años de edad debera pagar 500 + (50 * 2)

function edadPerro(){
    let edad = prompt ("Ingrese la edad de su perro ");
    alert ("la edad ingresada es " + edad);
    return edad;
}

function calcularPlan(edadP){
    costo=0;
    if (edadP<1) {
        costo=500;
    }
    else {
        costo=500 + (50 * edadP);    
    }
    return costo;
}

//Función que muestra resultado por consola
function mostrar(mensaje) {
    alert(mensaje);
}

function decision(){
    let rta = prompt ("desea volver a calcular un nuevo plan? SI - NO");
    return rta;
}
    
let respuesta;

do {
    let edad= edadPerro();
    let costoPlan= calcularPlan(edad);
    mostrar ("la edad ingresada es " + edad + "y el plan cuesta " + costoPlan);   
    //preguntar si desea seguir calculando costos. SI para continuar, NO para salir. 
    //guardamos la rta en una variable 'respuesta' y segun la decision que tome el usuario volvemos a ejecutar nuevamente 
    //las funciones. 
    respuesta=decision();
}while(respuesta=="SI");


