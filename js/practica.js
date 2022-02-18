/*Ejercicio de bienvenida
let entrada = prompt("Cual es tu nombre?");
let salida = `Bienvenido ${entrada}`;
alert(salida);
let entrada1 = prompt("Cual es tu nombre?");
let entrada2 = prompt("En que año naciste?");
const YEAR = 2022;
let edad = YEAR - entrada2;
let salida = `Hola ${entrada1} tu tienes ${edad} años.`;
alert(salida);
/*let info1 = parseFloat(prompt("Introduce un numero y te loresto de 5 en 5 hasta llegar a cero"))
for (i=info1; i>=1; i-=5){
	console.log(i);
} */
/*
let consulta1 = parseFloat(prompt("Escribe el numero que quieras"))
for (j=consulta1; j>=1; j-=5){
  if (j ==50){
    break
  }
	console.log(j);
}



let resultado = " ";
let consulta2 = 0;

do{
  consulta2 = consulta2 + 1;
}while (consulta2 < 5);
console.log(consulta2);*/

//let practicajs = document. getElementById("practicajs")
//practicajs.addEventListener('click', function() {
// alert("Hola");
//}

//let practicajs = document.querySelector("practicajs");
//console.log(practicajs);

//titulo.innerHTML = "Este es el titulo de la pagina"

//a que le asigno el id
// siempre con id y debo usar el get id?
// que puedo agregar?
//darle vida
//const practicajs =  prompt("ingrese un valor")
//console.log(practicajs);
/*let boton = document.getElementById("practicajs")
boton.addEventListener('click', function solicitarNombre() {
  let nombreIngresado = prompt("Dime tu nombre");
  alert("Hola " + nombreIngresado + " bienvenid@")
})

let boton1 = document.getElementById("practicando")
boton.addEventListener('click', function solicitarNombre() {
let boton2 = parseFloat(prompt("Ahora escribe el numero que quieras"))
  for (j= boton2; j>=1; j-=10){
  console.log(j)

  if (j ==100){

    console.log('hasta aca')
   

  } else if (j == 50){

    console.log('siguo contando');

  }
}
})

let x = parseFloat(prompt("Sigamos, vuelve a escribir un numero"))
let y = parseFloat(prompt("Sigamos, vuelve a escribir un numero"))
let pi1 = 3.14;
let resultadoA = (x+y);
alert("Tu numero por pi es" + (resultadoA * pi1))
*/
/*


let edad = prompt("Cuales tu edad?");
let comprobacion = edad > 18;

if (comprobacion) {
    console.log("Bienvenido a nuestra tienda");
} else if (edad == 17);{
    console.log("Te falta un año para ingresar a la tienda");
} else if ( edad > 17);{
    console.log("Eres menor de edad");
} else{
    console.log("No puedes ingresar aqui");
}
*/
/*let edad = prompt("Cual es tu edad?");
let esMayorDeEdad = edad > 18; //true //false 

if (esMayorDeEdad) {
  console.log("Bienvenido a nuestra tienda");
} 
else{ ((edad == 17) || (edad > 10) ||(edad < 10 ))
  console.log("Casi eres mayor de edad, pero no puedes ingresar");
} */

/* Ejercicio 1 - valor variables*/
/*
let nombreHomero =`Homero`;
let apellidoHomero =`Simposon`;
let edadHomero = `95`;

let salida = (`Soy ${nombreHomero} ${apellidoHomero} y tengo ${edadHomero} años`);{
alert(salida)}

const ciudad1 = `Paris`;
const ciudad2 = `Buenos Aires`;
const ciudad3 = `Barcelona `;
const ciudad4 = `Toulouse`;
const ciudad5 = `Quimper`;
alert(ciudad1)
alert(ciudad2)
alert(ciudad3)
alert(ciudad4)
alert(ciudad5)

let tipo = `B2`;
let fecha = `01/07/2007`;
let pais = `argentina`;
let soloAuto = `si`;
let carnet = `Tipo: ` + tipo + "  " +
            `Nombre:` + nombreHomero + "  " +
            `Fecha:`+ fecha;
console.log(carnet)

let nombre1 = prompt (`Cual es tu nombre?`);
let nombre2 = prompt (`Como se llama tu pareja?`);
let nombre3 = prompt (`Como se llama tu hija?`);
let nombres = `Tu te llamas  ${nombre1} tu esposa  ${nombre2} y tu hija ${nombre3}`;
console.log(nombres)*/

/*
let dinero = parseFloat (prompt ('Cuanto dinero tienes?'));
let descuento1 = dinero -  (dinero * 0.2);
let descuento2 = dinero - (dinero * 0.5);
console.log(descuento1);
console.log(descuento2);*/
/*
let entrada = prompt("Cual es tu nombre?");
let nombre = "maxi"
if (entrada == nombre){
  console.log("Fui yo");
}
else{
console.log("Yo no fui");}*/
/*
let tecla = prompt("ingresa una tecla");
if ((tecla == "y") || (tecla == "Y")) {
alert("correcto");
} else {
alert("error");
}*/
/*
let elige = prompt("elige un numero");
if (elige == 1){
  console.log("elegiste a homero");
}
else if (elige == 2){
  console.log("elegiste a Bart");
}else {
  console.log("error");
}*//*
let producto1 = prompt ("Ingresa un producto");
let producto2 = prompt ("Ingresa un producto");
if ((producto1 != "") && (producto2 !="")){
 let heladera = "1) " + producto1 + " " + 
                "2) " + producto2 + " ";
                  console.log(heladera);
                }
                else{
                  console.log("compra las cosas");
                }*/
//clase 4
//ejemplo sumar y mostrar
/*
let resultado = 0;
function sumar (primerNumero, segundoNumero){
      resultado = primerNumero + segundoNumero
}
function mostrar (mensaje) {
  console.log(mensaje)
}
sumar(6, 3);
mostrar(resultado);*/

//RECORRIENDO UN ARRAY
//Metodo 1
/*const generosMusicales =["Jazz", "Pop", "Rock", "Salsa"];
for (const genero of generosMusicales){
  console.log("Musica " + genero);
}

//metodo 2 con for each(tenemos que declarar el array en la variable genero)
generosMusicales.forEach(genero =>{
  console.log("Reproduciendo musica " + genero);
})

//agregar contenido al array con push(de esta forma lo hará al final de la lista)
generosMusicales.push("Tango");
console.log(generosMusicales);
//agregar contenido al array con push(de esta forma lo hará al inicio de la lista)
generosMusicales.unshift("Merenge");
console.log(generosMusicales);
// agrendo la respuesta del usuario a mi array original(con push(inicio) sino hacerlo con unshifht(al final))
let preguntaUser = prompt("Dime un genero musical");
if (preguntaUser !== '');
generosMusicales.push(preguntaUser)
console.log(generosMusicales)
//splice
console.log(generosMusicales.splice(2, 1))
 //
 
//join
let otrosGeneros= prompt("")
//concat
let listadoCompleto;
generosMusicales.concat(otrosGeneros);
console.log(otrosGeneros)

//indexof- nos dira la posicion del index del datos que inidiquemos
const index =listadoCompleto.indexof("Merengue");
console.log(`la posicion de merengue es ${listadoCompleto.indexof("Merengue")}`)
//slice- recibe 2 parametros, el primero es de donde arranca el corte y el 2 elnumero de items a tomar en cuenta desde el inicio del array
listadoCompleto = listadoCompleto.slice(2);
console.log(listadoCompleto)
// includes
console.log(generosMusicales.includes("Rock"));
//REVERSE-PERMITE INVERTIR EL ORDEN DE LOS ELEMENTOS(EJ PRECIOS DE MAYOR A MENOR E INVERSA)
let otroArray
otroArray =generosMusicales
generosMusicales.reverse();
console.log(otroArray)

//let total precios con una array de valores

//array de objetos*/
//Funciones orden superior
/*
//filter
console.log(canciones.filter(cancion => cancion.genero === 'Pop'));

//some
console.log(canciones.some(cancion => cancion.genero ==='Reggae'));  
//map
const cursos ={
  {nombre :'Javasceipt', precio 201'},
  {nombre :'vue', precio 201'},
}

const nombres=cursos.map((el) => {
  return {
    nombre: el.nombre,
    precio: el.precio,
    cursoNuevo: true
  }
})
console.log(nombres)
aqui dejaria nombre, precios y curso nuevo
//o agregar impuesto
precio: el.precio *1.21

//reduce
const numeros =[1,2]
const total = numeros.reduce (
  (acumulador,elemento => acumulador + elemento,0) //duncion a ejecutar por cada elemento);
)console.log(total)//21
//sort
const numeros =[1,2];
numeros.sort((a,b) => a-b);//1,2
numeros.sort((a,b) => b-a);//1,2
//ordenar por orden alfabetico
const items = [
  {name: 'pikachu', price:21},
  {name: 'charmander', price:20},
]
items.sort(a,b) => {
  if (a.name >b.name)
  return 1;
}if (a.name < b.name) {
  return -1
}
//a es igual ab
return 0;
console.log(items)
//ordenar por
const items = [
  {name: 'pikachu', price:21},
  {name: 'charmander', price:20},
]
let ordenarPor = prompt("ordenar por")

items.sort(a,b) => {
  if (a.[ordenarPor]>b.[ordenarPor])
  return 1;
}if (a.[ordenarPor] < b.[ordenarPor]) {
  return -1
}
//a es igual ab
return 0;
console.log(items)

//objetos nativos de JS
//MATH
console.log (Math.E) //2.7197474
console.log (Math.PI) //3.149282
const precios = [55,13,0,-10]
//max
console.log(math.max(55,13,0,-10))//55
//min
console.log(math.min(55,13,0,-10))//-10
const precios = [55,13,0,-10]
console.log
//RANDOM
console.log (Math.random() *10) ; //que me arroje un numero entre 0 y 10 multiplicamos
const opciones = ["piedra", "papel", "tijera"];
const index =math.rodun(math.random() *3)
console.log(opciones{index])
  //DATE
console.log(new Date()) //fecha de mi dispositivo, podemos pasarle un parametro para construir una fecha, hay varias formas:
//forma 1 pasar diferentes parametros
console.log(new Date(2022, 0, 15))
//forma2 a partir de stings
const casiNavidad =(new Date("December 25, 2021, 23:10:12")) // se pueden muchos formatos
//forma 3 x

casiNavidad.setDate(navidad.getDate() +2);//asignamos el dia a esa fecha, con get date obtenemos el dia y sumamos 2 pasando como parametro a setdate
console.log(navidad);

//DOM
*/

// Entregable clase 8 DOM->Interactuar con html
//console.dir(document);
//console.dir(document.head);
//console.dir(document.body);

const botonDom = document.getElementById("boutique");//cambiando ID
console.log(botonDom.innerHTML);
botonDom.innerHTML = "<h1>Boutique Premiumm </h1>";


const botonPractica11 = document.getElementById("argentine11");//cambiando ID
console.log(botonPractica11.innerHTML);
botonPractica11.innerHTML = "<h1>Cambio de titulo de prueba</h1>"; 

const botonPractica111 = document.getElementsByClassName("pie"); //cambiando clases
console.log(botonPractica111);
botonPractica111[1].innerHTML = `Prueba!!!! ${botonPractica111.innerHTML}`; // seleccionando 1 elemento
//for (const elemento1 of botonPractica111){
 // elemento1.innerHTML = `Prueba!!!! ${botonPractica111.innerHTML}`; //seleccionando todos
//}
console.log(botonDom.innerText) 
botonDom.innerText = "<h1> Boutique extra premiumm </h1>";



//const contag = document.getElementsByTagName("h3");en script.js
//console.log(contag);en script.js
const pruebaElementoId = document.querySelector("#boutique")// con numeral accedemosal id
const pruebaElementoClase = document.querySelector(".pie")// con numeral accedemos a la clase(solo busca el primer elemento que cumpla con la condición)
// si queremos ir a la sub clase seria .pie .subclase
console.log(pruebaElementoId);
console.log(pruebaElementoClase);
//const elementoid1 = document.querySelectorAll(". precio")//a diferencia de query selector común obtiene todos los elemento

//Insertar elementos
//const pruebaElementos = document.getElementById("Insertando Elementos");

/*// append va a insertar al final del nodo
const creandoNodo= document.createElement("p");
creandoNodo.innerHTML = "Creando nuevo nodo";
creandoNodo.className = "creandoClase";//creamos clase con .className
console.log(creandoNodo);
pruebaElementos.appendChild(creandoNodo;)//inserta el nodo,en este caso la p
// prepend va a insertar al inicio del nodo
const insertandoNod = document.createElement("h1");
insertandoNod.innerHTML ="<p>Nodo inicio </p>";
creandoNodo.prepend(insertandoNod);*/

//Ejemplo aplicado

const ultimoPrompt11 = prompt("Dime tu nombre");
const agregandoNombre =document.createElement("h2")
agregandoNombre.innerHTML = `Bienvenido ${ultimoPrompt11}`;
botonDom.appendChild(agregandoNombre);

/*
//get element by id-----
const titulo =document.getElementById(valor del Id)
console.log(titulo);
console.log(titulo.innerHTML)//muestra lo que tiene ese id
titulos.innerHTML="Este es un nuevo titulo"//modificamos el titulo desde JS
SUBTITULOS.innerHTML= `<strong> ${SUBTITULOS.innerHTML}<strong>`;//agregamos una etiqueta html desde js() strong al id subtitulos)
//esto se piensa para iteraccion del ususario.a partir de una iteracion modfifique el js.

//get element by class-----
const botonPractica111 = document.getElementsByClassName("pie"); //cambiando clases
console.log(botonPractica111);
botonPractica111[1].innerHTML = `Prueba!!!! ${botonPractica111.innerHTML}`; 

//get element by tag-----
const elementTag getElementsByTagName() //es por etiquetas
for (const tag of elememt )
 console.log(contag);
 for ( const tag of contag){
  tag.innerHTML = "Cambiando el contacto";
 }

 //query selector(comun y all)
const elementoid = document.querySelector("#tiutlo")//obtiene el elemento y lo podemos modificar
const elementoid1 = document.querySelector(".tiutlo . precio")//obtiene el elemento y lo podemos modificar
const elementoid1 = document.querySelectorAll(". precio")//obtiene el elemento y lo podemos modificar


//creando elements 
let parrafo = document.createElement("p"); //crear nodo de tipo elemento
parrafo.innerHTML = "<h2>Hola Coder</h2>"; //insertar HTML interno
document.body.append(parrafo); //añadir el nodo Element como hijo de body
//append va a insertar al final del nodo
elementoid.appendChild(parrafo)//mencionamos la constante del elemento ymencionamos la constante que lo ingresa. con append es al final
//prepend va a insetar al inicio delnodo
const otroNodo = document.createElement("div");
parrafo.innerHTML="<P>nUEVONODO<P>";
insertarElementos.prepend(otroNodo);
//Ejemplo aplicado 
const ultimoPrompt = prompt("Ingrese nombre");
titulos.innerHTML =`<h2> Bienvenido ${ultimoPrompt} </h2>`;
//eliminar nodos
parrafo.remove();//se puede utilizar para muchas cosas ejemplo eliminar en una canasta de compra.
//INPUTS
const input = document.getElementById("buscador-producto");
console.log(input.value);     

const listado = document.getElementById("listado");
for(const producto of productos) {
let contenedor = document.createElement("li");
contenedor.className = "producto";
contenedor.id = producto.id;
contenedor.innerHTML= `
<div class= "imagen-producto">
<img src="${producto.imagen}"
alt="">
</div>
<p class="nombre"> ${producto.nombre}</p>
<p class="precio">${producto.nombre}</p>`;
listado.appendChild(contenedor);
}
const sugeridos = document.getElementById("sugeridos"); 
const productosSugeridos = ["Celular", "Airpods", "Televisor", "Drone"];
for (sugeridoof productosSugeridos){
  let li =document.createElement("li");
  li.innerHTML = sugerido;
  sugeridos.prepend(li);
}


---------------


//Preguntas:
//console.log((`Tu numero multiplicado por pi es`)  (${hola} * Math.PI));// como concatenar esto?
//click
const vinos =[
 {nombre:"Rutini", precio "10"}
 {nombre:"Altos las hormigas", precio "12"}
 {nombre:"Altos las hormigas BIO", precio "15"}
 {nombre:"Cafayate reserve", precio "11"}
 {nombre:"Catena Nicasia Vineyard", precio "9"}
 {nombre:"Catena Zapata", precio "8"}
 {nombre:"Hey Malbec", precio "8"}
]*/

//--------
/*
//Eventos:Opcion 1
const funcionBoton1 = () => {
console.log("Soy la funcion delboton 1");
}
let boton1 = document.getElementById("boton-1");
boton1.addEventListener("click", ()   => {
  console.log("Hola soy el boton 1");
})
//mousedown
const plano = document.querySelector("#plano");
plano.onmousedown = ()=> {
console.log("Hago mousedown sobre el plano");
}
//mousedown + mouseup
plano.addEventListener ("mouseup") => {
console.log("Mouseup");
plano.style.backgroundColor = "cadetBlue";
}

//para agregar o remover clases(hay que insertarlas dentro de una funcion)
plano.classList.add("agrego-clase");
plano.classList.remove("quito-clase");

//mouse over
plano.addEventListener("mouseover") => {
  console.log("Utilizando mouseover");
  plano.style.backgroundColor ="red";
}
plano.addEventListener("mouseout") => {
  console.log("Utilizando mouseout");
  plano.style.backgroundColor ="bluex";
}
contenedor.onclick = () => {console.log("Hago click sobre el producto")};

//Event submit
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) =>{
e.preventDefault();
console.log("Enviar formulario");
console.log(nombre.value, apellidos, value);

}

)*/