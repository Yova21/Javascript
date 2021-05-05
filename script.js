
//fundamentacion de js practica 
/*alert ('hola mundo');
console.log('hola guapos'); */




//sentencias 
//alert ('hola'); alert ('mundo');


//variables let el primero 
let mensaje;
mensaje = "hola mundo"
alert(mensaje)

// var puedes declarar varias variables con un nombre pero no es recomendabñe


let c = 5, d=2, j=3; //mala practica

let a = 5;
let b = 6;
let suma = a + b;
console.log("El resultado de la suma es" , suma);

b = 7 
console.log(b)

let nombre = "roberto";
let nombre2= nombre;

nombre2 = "carlos";
console.log("El nombre uno es : ", nombre);
console.log("El nombre uno es : ", nombre2);


//nombrar variables con camel case 

nombreuno = "Yoiner";
Nombredos = "vargas";

// nombrar como underscor 
nombre_uno = "seba";
nombre_dos = "quiqui";

//NOMBRES NO COMUNES

let $ = 1;
let _ = 2;

// como no puedes nombrar variables mala practica

/* let 1a =3;
let primer-nombre = 4 */

"use strict" // requerir la ultima version 
mensaje = "Hola mundo";

//constantes

const PI =3.141624;
const COLOR_ROJO = "#FFFFF"
pi_dos = PI;
pi_dos = 7;

console.log(PI);
console.log(pi_dos);

//  const id_Account = get_id_account (45);

// tipos de datos
//dinamicamente tipado

let mensaje_tres = "hola Bbes";
mensaje_tres = 123456

// Numero 

let n = 123;
n = 12.456;


//valores numericos especiales  infinity, - Infinity y nan
// Infinity : representa el infinito matematico. Es un valor especial que es mayor que cualquier numro

console.log(1 / 0);
console.log(Infinity);


//Nan representa un error de calculo. Es un resultado de una operacion matematica incorrecta o indefinida

// Nan es pegajoso. cualquier operacion sobre nan devuelve nan 

console.log ("no es un numero " / 3);

console.log("no es un numero " / 2 + 5);


// tipo de dato BigInt.
// Valores enteros mayores (2^53-1 ) que o menores que -(2^53-1 )

let numero_grande = 1231341234123412341341341234134;
console.log (numero_grande);


//Tipo string
 
let texto = "hola" ; 
let texto_Dos = "hola";
let texto_Tres =``; // backticks interpolacion o funcionalidad estendida

let nom = "robrtp";
console.log("mi nombre es", + nom); //concatenacion 
console.log ("Mucho gusto", nom);

console.log(`hola`, nom);

console.log ("hola ${nom}")
console.log (`hola ${nom}`)

//boolean

// true y false

let verdadero = true;
let falso = false;

let mayor = 4 > 1 ; //true

// Tipo de dato null --
// Valor especial que no pertenece a ningun tipo de dato anterior.
// forma un tipo propio separado que contiene solo el valor null

let edad = null;
console.log (edad);


// valor Undefined 
// valor especial que no pertenece a ningun tipo tipo de dato anterior
// el significado de este es valor no asignado 

let edad2;
console.log(edad2);

// El operador typeof devuelve el tipo de dado

console.log (typeof undefined); //undefined
console.log (typeof 0);  //number
console.log(typeof true); //boolean
console.log(typeof 10n); //biginit
console.log(typeof "hola"); //string

console.log(alert); //fuction **
// console.log(null); //object error de javascrip
// console.log (Math); //object

//interacciones : alert, prompt, confirm
// alert - ventana modal
// alert("hola mundo");


//prompt

//prompt ('titulo de msg', 'hola');

// De esta forma se almacena
/*let nombress = prompt ('titulo de msg', 'hola');
alert (nombress); */

// confirm
/*let n = confirm('¿Te gusta el helado?');
console.log(n); // true si presionan ok y false si presionan cancelar */

//conversion de tipo

//explicita e implicita
//Convertir a String

let valor = true; 
console.log(typeof valor);

valor = String(valor); // true 
valor = String(false); //false
valor = string (nul); //null
valor = String (undefined); //undefined
console.log(valor);
console.log(typeof valor);

// convertir a numero
//alert ('6'/ '2'); //3

let cadena = "123";
let num_cad = Number(cadena); //123 
console.log(Number('hola')); //Nan

/* undefined -> nan
null -> 0
true -> 1
false -> 0
string -> 0
string 'hola' Nan
*/

//operadores basicos 

//operadores unarios y binarios

let a, b, res;
a = 2;
b =6 ;

res = a +b ;
res = a- b;
res = a*b;
res = a/b;
res =a %b; // mod
res = a**b; //potencia


//posicion del incremento o decremento 
a = 1;
b = a ++;
console.log(b);

a = 2;
a --;
console.log(a);

a = 1;
b = a++;
c = a;

console.log(b); //1
console.log(c);//2












