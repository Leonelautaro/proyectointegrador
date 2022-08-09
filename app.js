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


let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products.join(", \n"));
}

