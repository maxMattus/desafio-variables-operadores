
function calculadora(){


let opcion = prompt("Opciones a elegir:\n1.- SUMAR\n2.- RESTAR\n3.- MULTIPLICAR\n4.- DIVIDIR\n5.- MÓDULO");

let num1 = +prompt("Ingrese el primer valor");
let num2 = +prompt("Ingrese el segundo valor");

switch (opcion) {
    case "1":
        alert(`El resultado de sumar ${num1} y ${num2} es: ${num1 + num2}`);
        break;

    case "2":
        alert(`El resultado de restar ${num1} y ${num2} es: ${num1 - num2}`);
        break;

    case "3":
        alert(`El resultado de multiplicar ${num1} y ${num2} es: ${num1 * num2}`);
        break;

    case "4":
        if (num2 == 0){
            alert("No se puede dividir por 0");
        }
        else{
            alert(`El resultado de dividir ${num1} y ${num2} es: ${num1 /num2}`);
        }
            
        break;
        

    case "5":
        alert(`El resultado del modulo de ${num1} y ${num2} es: ${num1 % num2}`);
        break;

    default:
        alert("Debe ingresar un valor entre 1 y 5");
        
}
}



function numeros(){

let num1 = +prompt("Ingrese valor 1: ")
let num2 = +prompt("Ingrese valor 2: ")
let num3 = +prompt("Ingrese valor 3: ")
let num4 = +prompt("Ingrese valor 4: ")
let num5 = +prompt("Ingrese valor 5: ")

let suma = alert(`La suma de los 5 números es: ${num1+num2+num3+num4+num5}`);
let promedio = alert(`El promedio de los 5 números es: ${(num1+num2+num3+num4+num5)/5}`);

}



function temperatura(){

let opcion = prompt("Selecciones el número de la opción:\n1.- Transformar a Kelvin\n2.- Transformar a Fahrenheit");

let valor = +prompt("Ingrese el valor en grados celcius: ");


switch (opcion) {
    case "1":
        alert(`La temperatura en grados Kelvin es: ${valor + 273.15}`);
        break;

    case "2":
        alert(`La temperatura en grados Fahrenheit es: ${(valor*1.8)+32}`);
        break;

    default:
        alert("Ingrese opción 1 u opción 2");
        
}
}




function convertDias() {
    
    var dias = prompt("ingresa la cantidad de dias a transformar: ")
  
    let anios = Math.floor(dias / 365);
    let semanas = Math.floor((dias % 365) / 7);
    let diasRestantes = dias % 7;

    alert(`La cantidad de dias equivale a: ${anios} años, ${semanas} semanas y ${diasRestantes} días. `);
  
    
  }