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

/*  */