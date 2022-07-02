/* Constructor de productos con un metodo de SumarIva */

class Productos {
    constructor(id,title,precio,url) {
        this.id = id;
        this.title = title;
        this.precio = (precio);
        this.url = url;
    }
    sumarIva() {
        this.precio *= 1.21
    }
}

/* Array de productos para hacer el push de los productos */
const productos = [];

productos.push()

/* Variables */

let container = document.getElementById("container");

/* for of para sumar iva y agregar al dom */

for (constproducto of productos) {
    productos.sumarIva();
    let div = document.createElement("div");
    div.className = "card"
    ;
    container.append(div)

}

/* variables */
let carrito = [];
let carritoDom = document.getElementById("carrito");
let numeroCarrito = document.getElementById("numeroCarrito");
