contenido.innerHTML = producto*/
//consumiendo el json para obtener los datos
document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async() =>{// con esto le decimos al codigo que se espere(ver try , catch, fetch, res, dataset,parseInt)//create element con fragment no tienen refloat
    try {
      const res = await fetch('api.json');
      const data = await res.json()//res significa response
      pintarProductos(data);
      detectarBotones(data);

    } catch (error) {
     console.log(error)//si hay algun error que lo pinte en consola
    }
  }
  //introduzco los datos en las cards sin innerhtml
  const productContainer = document.querySelector('#contenedor-productos')//para poder el fragmento
  const pintarProductos = (data) => {//recibe la data 
    const template = document.querySelector('#template-productos').content//capturamos el template del html//.contentpara poder el fragmento
    const fragment = document.createDocumentFragment();//ver en profundidad
   // una vez que tenemos el fragmento recorremos la data con array.forEach(element => {
    Object.values(data).forEach(producto => {
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5').textContent = producto.title
        template.querySelector('p').textContent = producto.precio
        template.querySelector('.btn-primary').dataset.id = producto.id//id dinamico//que pasa si hay mas botones?como los identificamos con el query?
        template.querySelector('.btn-success').dataset.id = producto.id
        
        
        const clone = template.cloneNode(true)x
        fragment.appendChild(clone)
      })
      productContainer.appendChild(fragment)
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
        const customInfo = document.querySelectorAll('#customInfo');

        botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => { 
          console.log(btn.dataset)//agregamos
         const producto = carrito[btn.dataset.id]
         producto.cantidad ++
         carrito[btn.dataset.id] = { ...producto }
         pintarcarrito()
          })
        })
        
        botonesAgregar.forEach(btn => {
          btn.addEventListener('click', () => { 

            Toastify({

              text: "Añadido",
              
              duration: 3000
              
              }).showToast();
            })
          })


        customInfo.forEach(btn => {
          customInfo.forEach(elemento=>elemento.addEventListener('click', (e) => { 
            e.preventDefault();
            Swal.fire({
              icon: 'info',
              title: 'Tu vino tiene un puntaje de',
              text: 'Muy buena elección!',
              footer: 'En nuestra galeria encontraras lo mejor!'
            })
  
          }))
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
          botonesEliminar.forEach(btn => {
            btn.addEventListener('click', () => { 
  
              Toastify({
  
                text: "Eliminado",
                
                duration: 3000
                
                }).showToast();
              })
            })
      }
      //items.appendChild(fragment)
}

const infoPractica = document.getElementById("practicajs")