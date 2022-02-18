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

//Ejemplo aplicado

//const ultimoPrompt1 = prompt("Dime tu nombre");
//const agregandoNombre =document.createElement("h2")
//agregandoNombre.innerHTML = `Bienvenido ${ultimoPrompt1}`;
//contag.appendChild(agregandoNombre);


