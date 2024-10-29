// Operador ternario

/*
//Estructura del operador ternario: Condicion? ExpresionV: ExpresionF;

let res= (edad>=18)? "Es mayor de edad": "Es menor de edad";

console.log(res);
*/

/*
// Ejemplo del profesor de if anidado

let edad = 18;

if(edad >=0 && edad <=5){
    console.log("Eres un infante");
}else if (edad >=6 && edad <=11){
    console.log("Eres un niño");
}else if (edad >=12 && edad <=17){
    console.log("Eres un adolescente");
}else if (edad >18 && edad <=29){
    console.log("Eres joven");
}else if (edad >=30 && edad <=59){
    console.log("Eres adulto");
}else{
    console.log("Eres adulto mayor");
}
*/

/*
// Ejemplo de if anidado anterior pero simplificado

let edad = 18;

if(edad <=5){
    console.log("Eres un infante");
}else if (edad <=11){
    console.log("Eres un niño");
}else if (edad <=17){
    console.log("Eres un adolescente");
}else if (edad <=29){
    console.log("Eres joven");
}else if (edad <=59){
    console.log("Eres adulto");
}else{
    console.log("Eres adulto mayor");
}
*/


/*
//Ejemplo de switch

let dia=4;

switch(dia){

    case 1: console.log("Día Lunes");

    break;

    case 2: console.log("Día Martes");

    break;

    case 3: console.log("Día Miercoles");

    break;

    case 4: console.log("Día Jueves");

    break;

    default: console.log("Día no existe");

}
*/

/*
//Ejemplo 2 de operador Switch

let operador = "@";

switch(operador){

    case "+":

    break;

    case "-":

    break;

    case "*":

    break;

    case "/":

    break;

    default: console.log("Operacion no existe");

}
*/

// Hacer un ejercicio de convertir pesos a dolares, euros y libras exterlinas:

let moneda=3;

let peso = 2000000;
let dolar = 10;
let euro = 25; 
let libra = 6;

let dolarpesos = dolar * 4000;
let europesos = euro * 5000;
let librapesos = libra * 6000;
let pesodolar = peso / 4000;
let pesoeuro = peso / 5000;
let pesolibra = peso / 6000;


switch (moneda){

    //convertir dolares a pesos:
    case 1: 
    
    console.log("el resultado es "+dolarpesos+" pesos");
    break;

    //convertir euros a pesos
    case 2: 
    
    console.log("el resultado es "+europesos+" pesos");
    break;

    //convertir libras a pesos
    case 3: 
    
    console.log("El resultado es "+librapesos+" pesos");
    break;

    //convertir pesos a dolares
    case 4: 
    
    console.log("El resultado es"+pesodolar+" dolares");
    break;

    case 5: 

    console.log("El resultado es: "+pesoeuro+" euros");
    break;

    case 6:

    console.log("El resultado es "+pesolibra+" libras exterlinas");
    break;

    default: console.log("Moneda desconocida");

}


/*
// ejercicio de multiplicacion


const numero1 = 2;
const numero2 = 4;
const operador = '*';


function calcularMultiplicacion(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case '*':
            resultado = num1 * num2;
            break;
        default:
            resultado = 'Operador no reconocido';
            break;
    }

    return resultado;
}

console.log("El resultado es: "+calcularMultiplicacion(numero1, numero2, operador));
*/



// Ejemplo de uso





//************************************************ */

/*
let amount = 100; // Monto a convertir
let fromCurrency = 'USD'; // Moneda de origen
let toCurrency = 'EUR'; // Moneda de destino
let result;
let conversionRate;

switch (fromCurrency) {
    case 'USD':
        switch (toCurrency) {
            case 'EUR':
                conversionRate = 0.93; // Tasa de conversión USD a EUR
                result = amount * conversionRate;
                console.log(`${amount} ${fromCurrency} es igual a ${result.toFixed(2)} ${toCurrency}`);
                break;
            case 'MXN':
                conversionRate = 18.05; // Tasa de conversión USD a MXN
                result = amount * conversionRate;
                console.log(`${amount} ${fromCurrency} es igual a ${result.toFixed(2)} ${toCurrency}`);
                break;
            // Agrega más conversiones si es necesario
            default:
                console.log("Moneda de destino no soportada");
        }
        break;

    case 'EUR':
        switch (toCurrency) {
            case 'USD':
                conversionRate = 1.07; // Tasa de conversión EUR a USD
                result = amount * conversionRate;
                console.log(`${amount} ${fromCurrency} es igual a ${result.toFixed(2)} ${toCurrency}`);
                break;
            case 'MXN':
                conversionRate = 19.30; // Tasa de conversión EUR a MXN
                result = amount * conversionRate;
                console.log(`${amount} ${fromCurrency} es igual a ${result.toFixed(2)} ${toCurrency}`);
                break;
            // Agrega más conversiones si es necesario
            default:
                console.log("Moneda de destino no soportada");
        }
        break;

    case 'MXN':
        switch (toCurrency) {
            case 'USD':
                conversionRate = 0.055; // Tasa de conversión MXN a USD
                result = amount * conversionRate;
                console.log(`${amount} ${fromCurrency} es igual a ${result.toFixed(2)} ${toCurrency}`);
                break;
            case 'EUR':
                conversionRate = 0.052; // Tasa de conversión MXN a EUR
                result = amount * conversionRate;
                console.log(`${amount} ${fromCurrency} es igual a ${result.toFixed(2)} ${toCurrency}`);
                break;
            // Agrega más conversiones si es necesario
            default:
                console.log("Moneda de destino no soportada");
        }
        break;

    default:
        console.log("Moneda de origen no soportada");
}
*/








