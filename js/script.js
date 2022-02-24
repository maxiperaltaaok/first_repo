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


contenido.innerHTML = producto*/
//consumiendo el json para obtener los datos
document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async() =>{// con esto le decimos al codigo que se espere(ver try , catch, fetch, res, dataset,parseInt)//create element con fragment no tienen refloat
    try {
      const res = await fetch('api.json');
      const data = await res.json()//res significa response
      //console.log(data)
      pintarProductos(data);
      detectarBotones(data);

    } catch (error) {
     console.log(error)//si hay algun error que lo pinte en consola
    }
  }
  //introduzco los datos en las cards sin innerhtml
  const contenedorProductos = document.querySelector('#contenedor-productos')//para poder el fragmento
  const pintarProductos = (data) => {//recibe la data 
    const template = document.querySelector('#template-productos').content//capturamos el template del html//.contentpara poder el fragmento
    const fragment = document.createDocumentFragment();//ver en profundidad
   // una vez que tenemos el fragmento recorremos la data con array.forEach(element => {
      data.forEach(producto => {
        console.log(producto);
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5').textContent = producto.title
        template.querySelector('p').textContent = producto.precio
        template.querySelector('button').dataset.id = producto.id//id dinamico//que pasa si hay mas botones?como los identificamos con el query?
        
        
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
      })
      contenedorProductos.appendChild(fragment)
    }
    //carrito mediante objetos para que cuando el ususario agregue un producto se actualice el id de objetos
    let carrito = {}
    const detectarBotones = (data) =>{ //va a necesitar la data por eso lo llevamos abajo de pintar productos(data), para qagrupar el consumo de la data
      const botones = document.querySelectorAll('.card button')
     botones.forEach(btn => {
      btn.addEventListener('click',() => {
        console.log(btn.dataset.id)
        const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
        if (carrito.hasOwnProperty(producto.id)) {
          producto.cantidad = carrito[producto.id].cantidad +1
        }
        carrito[producto.id] = { ...producto }//copia de producto-spread operator
          console.log(carrito)
        pintarcarrito()
    })
    
  })
     
//no podemos hacer forEach de un objeto -> lo hacemos con forin si necesitamos una key, sinotransformamos el objeto en un array y usamos forEach usando value
//capturando el item para los productos
const items = document.querySelector('#items')

const pintarcarrito = () => { 

  items.innerHTML = ''

const template = document.querySelector('#template-carrito').content
const fragment = document.createDocumentFragment()

      Object.values(carrito).forEach(producto => {
        console.log(producto)
        template.querySelector('th').textContent = producto.id //pegamos lo que viene en producto(id)
        template.querySelectorAll('td')[0].textContent= producto.title //accedemos al primer elemento
        template.querySelectorAll('td')[1].textContent= producto.cantidad 
        template.querySelector('span').textContent = producto.precio * producto.cantidad 
      
        //botones
        template.querySelector('.btn-info').dataset.id = producto.id//porque el .id? cada uno de los botones va a tener su respectivo id. una vez que los tenemos vamos a la const de los botones
        template.querySelector('.btn-danger').dataset.id = producto.id
       
      const clone = template.cloneNode(true)//una vez que tenemos los templates hechos los clonamos(?)   
      fragment.appendChild(clone) 
    })

      items.appendChild(fragment)//para evitar el reflow hacemos un appendchild del fragment
      
      pintarFooter()
      accionBotones()

      }

      const footer = document.querySelector('#footer-carrito')
      const pintarFooter = () => {
        footer.innerHTML = ''

        if (Object.keys(carrito).length === 0) {//cuenta si existen elementos
          footer.innerHTML = `
          <th scope="row" colspan="5">Carrito vacío</th>
          `
          return
        }

        const template = document.querySelector('#template-footer').content
        const fragment = document.createDocumentFragment()
          
        // sumar cantidad y sumar totales
        const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)//reduce tiene un acumulador(guarda lo que le digamos, sumar,restar,trasnformar...) y un iterador
        const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
       // console.log(nPrecio)
        template.querySelectorAll('td')[0].textContent=nCantidad
        template.querySelector('span').textContent=nPrecio 

        const clone = template.cloneNode(true)// conamos todo lo que esta en su interior
        fragment.appendChild(clone)   //??
        
        footer.appendChild(fragment)     //??
        //eliminar articulos al apretar el boton vaciar contenido
        const vaciarCarrito1 = document.querySelector('#vaciar-carrito')
        vaciarCarrito1.addEventListener('click',() => {
          carrito={}
          pintarcarrito()
        })
      } 
      
      
      const accionBotones = () => {
        const botonesAgregar = document.querySelectorAll('#items .btn-info')
        const botonesEliminar = document.querySelectorAll('#items .btn-danger')
        
        botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => { 
          console.log(btn.dataset)//agregamos
         const producto = carrito[btn.dataset.id]
         producto.cantidad ++
         carrito[btn.dataset.id] = { ...producto }
         pintarcarrito()
          })
        })

        botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () => { 
          //console.log('eliminando...')
          const producto = carrito[btn.dataset.id]
            producto.cantidad--
            if (producto.cantidad === 0) {
                delete carrito[btn.dataset.id]
            } else {
                carrito[btn.dataset.id] = { ...producto }
            }
            pintarcarrito()
            })
          })
        
      }
      //items.appendChild(fragment)
}
