
let allContainerCart = document.querySelector('.galeria');
let containerBuyCart = document.querySelector('#carrito')// arreglo para incluir los objetos de los productos al comprar

let buyThings= [];

//funciones
loadEventListenrs();
function loadEventListenrs(){
  allContainerCart.addEventListener('click', addProduct);//tomamos solo el click del boton mediante la clase del boton
  containerBuyCart.addEventListener('click', deleteProduct);

}

  


function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains('btn-success')) {
    const selectProduct = e.target.parentElement.parentElement;
  readTheContent(selectProduct);
    //console.log(selectProduct)
  }
}

function deleteProduct(e) {// lo hacemos con un filter. primero condicion
  if (e.target.classList.contains('delete-product')) {
    const deleteId = e.target.getAttribute('data-id');
    buyThings = buyThings.filter(product => product.id !== deleteId)//nos va a filtrar todos los array que no cumplan la func, si son distintos que cumpla, nos lo devuelve, si encuentra un id igual al clickeado, no lo añade a buythings 
  }
  loadHtml();
}
function readTheContent(product){
  const infoProduct = {
    image: product.querySelector('div img').src,
    title: product.querySelector('.pie').textContent,
    price: product.querySelector('div p span').textContent,
    id: product.querySelector('#botonCompra').getAttribute('data-id'),
    amount: 1
  }
const exist = buyThings.some(product =>product.id === infoProduct.id); //some devuelve un boolean// preguntamos si este nuevo producto ya esta en el arreglo
 if (exist) {
   const pro = buyThings.map(product => {//recorremos los productos y preguntamos
    if (product.id === infoProduct.id) {
      product.amount++;
      return product;
    } else{//si no esta seleccionado lo retornamos
      return product
    } 
   });
   buyThings= [...pro];
 }else {
  buyThings = [...buyThings, infoProduct]//usamos spread operator//utilizamos lo que ya hay en el arreglo buythings y concatenamos el objeto)
}
 loadHtml();
//console.log(infoProduct)
}

function loadHtml(){//vamos a recorrer el objeto
  clearHtml();
buyThings.forEach(product => {//recuperamos los atributos del objeto product usando destructuracion de objetos
const {image, title, price, id, amount}= product//sacamos los atributos del objeto y los declaramos con sus mismos nombres y variables
   const row = document.createElement('div');
   row.classList.add('item');//hacemos dinamico el html estatico con js//concatenamos con image+hacemos dinamico
   row.innerHTML = `<img src="${image}"  width="40" height="90" alt="">
   <div class="item-content">
       <h5>"${title}"</h5>
       <h5 class="cart-price">${price}e$</h5>
       <h6>Amount:${amount}</h6>
   </div>
   <spann class="delete-product" data-id="${id}">X</spann>`
   //añadimos al modal(carrito- creando el selector del modal)
   containerBuyCart.appendChild(row);//vamos a añadir un hijo a ese selector//este apependchild solo agrega
 });
}
  function clearHtml(){
    containerBuyCart.innerHTML = '';
  }







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

// append va a insertar al final del nodo
const creandoNodo= document.createElement("p");
creandoNodo.innerHTML = "Creando nuevo nodo";
creandoNodo.className = "creandoClase";//creamos clase con .className
console.log(creandoNodo);
pruebaElementos.appendChild(creandoNodo;)//inserta el nodo,en este caso la p
// prepend va a insertar al inicio del nodo
const insertandoNod = document.createElement("h1");
insertandoNod.innerHTML ="<p>Nodo inicio </p>";
creandoNodo.prepend(insertandoNod);

//Ejemplo aplicado

const ultimoPrompt11 = prompt("Dime tu nombre");
const agregandoNombre =document.createElement("h2")
agregandoNombre.innerHTML = `Bienvenido ${ultimoPrompt11}`;
botonDom.appendChild(agregandoNombre);
*/
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
//variables 
/*
document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async() =>{// con esto le decimos al codigo que se espere(ver try , catch, fetch, res, dataset,parseInt)//create element con fragment no tienen refloat
    try {
      const res = await fetch('api.json');
      const data = await res.json()
    } catch (error) {
      console.log(error)//si hay algun error que lo pinte en consola
     }
   }
*/

//let hola = alert("Aprieta el search para iniciar el proceso");
//let practicajs = document.getElementById("practicajs")//linea 1 y 2 no las incluyo porque sino deja de funcionar.
//practicajs.addEventListener('click', function() {
  //event.preventDefault()
  //----------------------------
  /*
const materiasUni =["JavaScript", "PHP", ".NET", "phyton"];
  console.log("Hola estas son los lenguajes disponibles ");
  console.log(materiasUni);

let tuMateria = prompt("Dime que lenguaje quieres aprender y que no este aquí");
if (tuMateria !== '');
materiasUni.unshift(tuMateria);
console.log("Perfecto la incluimos al inicio porque sabemos que es tu preferida!");
console.log(materiasUni);
const consultaUser1 = materiasUni.concat(tuMateria);
console.log("No,mejor al inicio!!");
let tuMateria1 = prompt("Genial! Dinos otra para personalizartelo aun mas!");
if (tuMateria1 !== '');
materiasUni.push(tuMateria1);
console.log(materiasUni);
console.log("Esta realmente te interesa?")
let tuMateria2 = materiasUni.slice(2,3);
let consulta1 = prompt("Esta realmente te interesa ? " + tuMateria2);
if (consulta1 == "si") {
  console.log("Nos parecia! la dejamos!")
  }  else{
console.log("Perfecto la quitamos")
  }
  let materiasFinal = 
  console.log("Con todo este lio, hemos incluido phyton?");
  console.log( materiasUni.includes('phyton'));
  console.log("Y PHP te tocará en el trimestre numero");
  console.log(materiasUni.indexOf("PHP"));

  let hola = prompt("Introduce un numero");
  console.log("Tu resultado por pi es")
    console.log(hola * Math.PI);
    //array1
const vinos1 = [
      { nombre:"Rutini", precio: "10" },
      { nombre:"Altos las hormigas", precio: "12"},
      { nombre:"Altos las hormigas BIO", precio: "15"},
      { nombre:"Cafayate reserve", precio: "11"},
      { nombre:"Catena Nicasia Vineyard", precio: "9"},
      { nombre:"Catena Zapata", precio: "8"},
      { nombre:"Hey Malbec", precio: "15"}
    ];
//array2
    const vinos2 = [
      { nombre:"Revancha Malbec", precio: "11"},
      { nombre:"Vino", precio: "9"},
    ];

console.log(vinos1.length);
vinos1.forEach(vinos => console.log(vinos))
//console.log(vinos1.indexOf("Catena Zapata"));
//let vinos3  = vinos1.shift();
  //console.log()
//concatenar
const vinos4 = vinos1.concat(vinos2);
console.log(vinos4)
//metodo indexof
console.log(vinos4.indexOf('Hey Malbec'))// porque me sale-1 si pongo cualquier nombre de vino?
//metodo find 
console.log (resultadoVinosFind = vinos4.find((encuentra) => encuentra.nombre === "Rutini"))
//filter
console.log (usandoFilter = vinos4.filter((enucentra1) => enucentra1.precio === "8"))
//Some
console.log (usandoSome = vinos4.some((enucentra2) => enucentra2.nombre === "Altos las hormigas"))
console.log (usandoSome = vinos4.some((enucentra2) => enucentra2.nombre === "Zucardi"))
//Map nombres
const usandoMap = vinos4.map((cambio1) =>  cambio1.nombre,)
 console.log(usandoMap);
 // Map + precio con iva
 const usandoMap1 = vinos1.map((cambio2) =>  {
return{
nombre: cambio2.nombre,
precio: cambio2.precio *1.21,
}
 })
 console.log(usandoMap1)
 //Sort
 //const sort1 = vinos2.sort(());//no me esta funcionando, que es lo que falta?
 //console.log(sort1);*/
/*
 let contag = document.getElementsByTagName("h3");//cambiando tags, utilizar el for no el forEach
 console.log(contag);
 for ( const tag of contag){
  tag.innerHTML = "Cambiando el contacto";
 }

 //Insertar elementos

const pruebaElementos = document.getElementById("Insertando Elementos");

// append va a insertar al final del nodo

const creandoNodo= document.createElement("p");
creandoNodo.innerHTML = "Creando nuevo nodo";
creandoNodo.className = "creandoClase";//creamos clase con .className
console.log(creandoNodo);
//pruebaElementos.appendChild(creandoNodo);//inserta el nodo,en este caso la p
// prepend va a insertar al inicio del nodo
const insertandoNod = document.createElement("h1");
insertandoNod.innerHTML ="<p>Nodo inicio </p>";
creandoNodo.prepend(insertandoNod);
*/
//Ejemplo aplicado

//const ultimoPrompt1 = prompt("Dime tu nombre");
//const agregandoNombre =document.createElement("h2")
//agregandoNombre.innerHTML = `Bienvenido ${ultimoPrompt1}`;
//contag.appendChild(agregandoNombre);
/*
//Eventos
let evento1 = document.getElementById("botonEvento");
evento1.addEventListener("click", iniciandoEvento);
function iniciandoEvento() {
  console.log("Has elegido un vino");
}
//let evento2 = document.getElementById("botonEvento1");
//evento2.addEventListener("click", iniciandoEvento1);
//function iniciandoEvento1() {
 // console.log("Has elegido un vino");
//}
let evento2 = document.getElementById("botonEvento1");
evento2.addEventListener("mouseover", function (botonEvento1) {
  event.target.style.color ="red";
})


let evento3 = document.getElementById("botonEvento2");
evento3.onmousedown = () => {
  console.log("Click + background")
  evento3.style.backgroundColor="grey";

} 
//evento3.onmouseup = () => {
  //console.log("Normalidad")
  //evento3.style.backgroundColor="blue";
//}

evento3.addEventListener("mouseup", () =>{
  console.log("Normalidad");
  evento3.style.backgroundColor = "white";
})
//console.log("El boton funciona");

evento3.addEventListener("mouseover", () => {
  console.log("over");

})
//eventos con el teclado
let teclado = document.getElementById("botonEvento3");
teclado.addEventListener("keydown" , (e) =>{
    e.preventDefault();
    console.log(e.keyCode);//no funciona, deprecado?
    console.log("Presionando tecla");
})

const BIENVENIDA = "Hola";
localStorage.setItem("Hola" , "Almacenando"); //guardamosstrings
localStorage.setItem("Numero" , 1223); //numero
localStorage.setItem("booleano" , true); //booleano(ejemplo recibiendoedaddeunformulario)

//variables storage
const saludosStorage = localStorage.getItem(BIENVENIDA);

//variables del dom
const saludo = document.getElementById("saludos");
saludo.innerHTML = saludosStorage;

//recibe dos parametros : llave  y el valor -- la llave  siempre es un string
//el valor  puede ser de distinto tipo(texto,numerico, boolean)
localStorage.setItem("key"1234);
localStorage.getItem("key");
localStorage.removeItem("key");//elimina la info del localstorage(ej logout)
localStorage.clear("key");//

//storage con objetos
const producto = {id: 1, nombre:"pan", precio:1234}
