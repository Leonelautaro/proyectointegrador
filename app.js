/* Iniciando sesion del usuario */
let usuario;
let usuarioStorage = localStorage.getItem("user");
if(usuarioStorage) {
    let message = `Bienvenido ${usuarioStorage}`;
    alert(message);
    usuario = usuarioStorage;
} else{
    alert("no estas logeado");
    user = prompt("Ingrese su nombre");
    localStorage.setItem("user", user);
}
console.log(usuarioStorage)

/* constructor de productos */
class Productos {
    constructor(id, title, precio, url) {
        this.id = id;
        this.title = title;
        this.precio = (precio);
        this.url = url;
    }
    sumarIva() {
        this.precio *= 1.21
    }
}


/* array para el push de productos */
const productos = [];

/* Productos de Json */

const obtenerProductos = async ()=>{

    const resp = await fetch("file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/productos.json")
    const data = await resp.json();
    
    data.forEach(el => {
        productos.push(new Productos(el.id,el.title,el.precio,el.url))
    });
    
    renderizarProductosAlDom()
}

productos.push(new Productos(1,"Foto impresa 1",1000,"file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/imagenes/img1.webp"));
productos.push(new Productos(2,"foto impresa 2",2000,"file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/imagenes/img2.webp"));
productos.push(new Productos(3,"Foto impresa 3",3000,"file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/imagenes/img3.webp"));
productos.push(new Productos(4,"Foto impresa 4", 4000,"file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/imagenes/img4.webp"));
productos.push(new Productos(5,"Foto Impresa 5",5000, "file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/imagenes/img5.webp"));
productos.push(new Productos(6,"Foto impresa 6",6000,"file:///C:/Users/leanl/Desktop/Proyecto%20final%20Js/imagenes/img6.webp"));

/* Variables */
let container = document.getElementById("container");


/* for para agregar al DOM */

function renderizarProductosAlDom () {

for(const producto of productos) {
    producto.sumarIva();
    let div = document.createElement("div");
    div.className = "card"
    div.innerHTML  = `
    <img class="img-card" src="${producto.url}" alt="">
    <p class="id-card">Id: ${producto.id}</p>
    <p class="title-card">${producto.title}</p>
    <p class="precio-card">$${producto.precio}</p>
    <button  class="btn-card" onclick = "comprar (${producto.id})">Comprar</button>
    `;

    container.append(div)
}    
}

/* variables */
let carrito = []
let carritoDom = document.getElementById("carrito");
let numeroCarrito = document.getElementById("numeroCarrito");

/* productos del localStorage para renderizar */
carrito = JSON.parse(localStorage.getItem("carritoLocal")) || [];
carritoLocalStorage()

/* Comprar y agregar al carrito */

function comprar (param) {
    const producto = productos.find(el => el.id === param);
    carrito.push(producto);
    numeroCarrito.innerHTML = carrito.length
    agregarCarrito(carrito.length - 1)
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
} 

/* Carrito al DOM */
function agregarCarrito(parametro) {
    let div = document.createElement("div");
    div.id = `carrito-${carrito[parametro].id}`;
    div.className = "carritoStyle"
    div.innerHTML = `
    <p>Id: ${carrito[parametro].id}</p>
    <p">${carrito[parametro].title}</p>
    <p>$${carrito[parametro].precio}</p>
    <button class="btn-card" onclick = "eliminar(${carrito[parametro].id})">Eliminar</button>
    `;
    carritoDom.append(div)
}

/* Elimina productos */
function eliminar(idEliminar){
    const eliminar = document.getElementById(`carrito-${idEliminar}`);
    eliminar.remove();
    carrito = carrito.filter(el => el.id !== idEliminar)
    numeroCarrito.innerHTML = carrito.length
    localStorage.setItem("carritoLocal", JSON.stringify(carrito));
}

/* Rend. Carrito en el DOM */
function carritoLocalStorage () {
    numeroCarrito.innerHTML = carrito.length
    for (const prod of carrito) {
        let div = document.createElement("div");
        div.id = `carrito-${prod.id}`;
        div.className = "carritoStyle"
        div.innerHTML = `
        <p>Id: ${prod.id}</p>
        <p">${prod.title}</p>
        <p>$${prod.id}</p>
        <button class="btn-card" onclick = "eliminar(${prod.id})">Eliminar</button>
        `;
        carritoDom.append(div)
    }
}

/* Inicia  la funcion de productos del json */
obtenerProductos()
renderizarProductosAlDom()