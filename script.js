
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
valor = String (null); //null
valor = String (undefined); //undefined
console.log(valor);
console.log(typeof valor);

// convertir a numero
//alert ('6'/ '2'); //3

let cadena = "123";
let num_cad = Number(cadena); //123 
console.log(Number('hola')); //Nan


/* Tabla de conversion de numeros
 undefined -> nan
null -> 0
true -> 1
false -> 0
string -> 0
string 'hola' Nan
*/

//operadores basicos 

//operadores unarios y binarios

let ad, bd, res;
c = 2;
b =6 ;

res = ad +bd ;
res = ad- bd;
res = ad*bd;
res = ad/bd;
res =ad %bd; // mod
res = ad**bd; //potencia


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

//comparaciones 

console.log(2>1); // true
console.log(2 == 1); //false
console.log( 2!=1); //true

let resultado = 2>1;

//comparaciones entre cadenas
console.log('Z' > 'A'); //true
console.log('Show' > 'show'); //false
console.log('casa' > 'casas'); //false
console.log('a' > 'A'); //true 

console.log('carro' > 'cerro');

//la letra minuscula es mayor que la mayuscula
//la palabra con mas letra es mayor que la de menor



//comparacion de diferentes tipos
// Al comparar valordes de diferentes tipos, JS convierte los valores a numeros

// toda comparacion con Nan es falsa
//el undefined y el null en las comparaciones de igualacion no estrictas actuan diferente 
// son iguales entre si, pero no a ningun otro valor


console.log('*******');

a = 0;
b = '0';

Boleano_a = Boolean(a); //false
boleano_b = Boolean(b); //true
console.log(a == b); // true

console.log('*******');
console.log('2' > 1); //true 
console.log('01' == 1); // true

console.log('true' > 0); // true
console.log('false' ==0); // true

//Nan
console.log('Nannnnjdnjfn')
console.log('hola'> 0) // false
console.log('hola'< 0) // false
console.log('hola'== 0) // false

//NUll
console.log('NULLLLLL')
console.log('null'> 0) // false
console.log('null'< 0) // false
console.log('null'== 0) // false
console.log('null'>=0) // true


//undefined
console.log('Undeeefineeddddddd')
console.log(undefined > 0); //false 
console.log(undefined <0); //false 
console.log(undefined == 0); // false 




console.log('*** nan y undefined === ****');
//el undefined y el null en las comparaciones de igualacion no estrictas actuan diferente 
// son iguales entre si, pero no a ningun otro valor

console.log(null == undefined); //true
console.log(null == 5); //false
console.log(undefined == 5); //false



console.log('*** no diferencian entre 0 de falso ***')
console.log(0== false); //true
console.log('' == false); //true


//igualacion estricta

console.log(0 === false); // false
console.log(null === undefined); //false
console.log(null == undefined); // true


/*  Tabla conversion de numeros
undefined -> nan
null -> 0
true -> 1
false -> 0
string -> 0
string 'hola' Nan
*/

/* Tabla de conversion booleanos
Undefined -> false
null -> false
string '' -> false
nan -> false 
0 -> false
'0' -> true 
' ' ->

*/ 


//ejercicios

console.log(5>4); //true
console.log('apple' > 'pineapple'); //false
console.log('2' > '12'); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == '0'); //false
console.log(null=== + '0' ); // false


//SENTENCIA IF

//if de linea
if (4>5) console.log('Mensaje');

if (4>5) {
    b = 5-2;
    console.log('Mensaje');
}

// if bol

if ('45a'/3){
    console.log('no entro');   
}

if ('0'){
    console.log('entro');   
}

if (4/3){
    console.log('entro');   
}

if (1){
    console.log('entro');   
}

let edadx;
if(edadx){
    console.log('variable definida');

}else{
    console.log('Variable no definida');
}

//haga un algoritmo de edad que retorne tru si es mayor folse si no lo es

let edad_user = 17;
if(edad_user >= 18) {
console.log(true);
}else {
    console.log(false);
}

//mas facil 
console.log(edad_user >= 18);

//Operador ternario
// condicion  ? operacion verdadera : operacion falsa; 

resultado = edad_user >= 18? x=5: x=7;

// Operador logico
/* 
v or v = v
v or f = v
f or v = v 
f or f = f 
*/ 

console.log('*** Operador Or ****');
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

if(4 == 4 || 2>5 ){
    console.log('verdadero');
}

// resultado = valoruno || valordos || valortres;
// Evalua los operando de izquierda a derecha
// por cada operando, convierte el valor a booleano. Si el resultado es true, se detiene y retorarna el valor original de ese operando
//si todos los operandos han sido evaluando (todos eran falson), retorna el ultimo operando.


let comparacion_bol = true ||false || true; // true
comparacion_bol = '0' || '0'; // '0'
comparacion_bol = undefined || null || NaN; // '0'
comparacion_bol = undefined || null || 3 || '';  //

// resumen: devuelve el primer valor verdadero o el utlimo si todos son falson




// prevalencia u orden entre or y and
// a && b || c && d == (a && b) \\ (c && d)

// negacion

console.log(!true); // false
console.log(!false); // true
console.log(!!undefined); // false == boolean (undefeined)

// nullish o fusion de nulos

//si todos los operandos han sido evaluados son nulos o undefined regresa el ultimo.
console.log (' prueba de test');
a = null?? undefined ?? undefined?? null?? "hola" ?? null ?? 'carlos'; // "hola"
 a = undefined?? undefined ?? undefined ?? null?? null?? null;//null



//bucles while y for
// while (condicion){}
console.log('***** primer while******');
i=0
while (i<=10)
{
    console.log(`el valor de i es${i}`);
    i++;
}

    
// do - while
/* do{

}while (condicion); */
console.log('segunda prueba ****');
i = 1
do{
    console.log(`el valor de i es: ${i}`);
    i++;
}while(i<=10);

// ciclo for
/*
for (comienzo; condicion; incremento){

} 
 */  //incremento
 console.log('**** Primer for ***');
for(i=0; i<=10; i++);{
 console.log(`El valor de i es ${i}`);

}
/*
// decreciente
 console.log('**** Segundo for ***');
for(i=0; i=10; i--);{
 console.log(`El valor de i es ${i}`);
 
} */

//alcance de la variable
console.log('**** PRUBEA ALCAN***');
let k = 0;
for(k=0; k<=10; k++ ){
    console.log(`El valor de k es : ${k}`);
}


//Saltado de partes
console.log('*******');
 m = 0;
for(; m<=10; m++ ){
    console.log(`El valor de k es : ${m}`);
}

console.log(`El valor de k por fuera es: ${m}`); 

//BREAKY CONTINUE
console.log('****** BrEAK ****');
o = 0;
while(1){
    console.log(`el valor de o es ${o++}`);
    if(o == 11) break;
}

for (i=1; i<= 10; i++){
 if (i%2 !=0) continue;
 console.log(`${i} es un numero par.`)
}







