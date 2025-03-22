/*Consigna

1- Dados los extremos inferior y superior de un rango, informar si el numero ingresado esta en rango o no

2- Si el numero esta en rango o no y si es par o impar
Entrega

    Clonar este repositorio localmente
    Crear un repositorio personal con el nombre dw-p1-01
    Modificar este README.md con este contenido:

### Alumno: ...

#### Comision: ...

    Subir los archivos index.html, index.js y README.md

    cota minima y cota maxima
*/


const cotaMinima = -10;

const cotaMaxima = 10;

let userInput = parseInt(prompt(`porfa ingresa un numero entre ${cotaMinima} y ${cotaMaxima} por favor`));

// evaluar condicion fsv
/*
if (userInput >= cotaMinima){

    if (userInput <= cotaMaxima){
        alert("estas en rango");
    }
    else{
        alert("el number no esta en rango");    
    }
}
else{
    alert("el number no esta en rango");
}  */

if (userInput >= cotaMinima && userInput <= cotaMaxima) {
        alert("estas en rango");
}
else {
    alert("el number no esta en rango"); 
}



let msg = (userInput % 2 == 0)? "par" : "impar";


alert(`el numero ingresado es ${msg}`);