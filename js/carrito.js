class Prducto{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito{
    constructor(){
        this.productos = {};
    }
    agregarProductos(productos){
        this.productos.push(productos)
    }

    calcularTotal(){
        return this.productos.reduce((total, pre) => + pre.precio, 0)
    }

    listarProductos(){
        return this.productos.map(pre=> `<li> ${ pre.mostrarDetalles()} </li>`);
    }
}

const productosDisponibles = [
    new producto(1, "Vainilla Con Semillas", 25.00)
    new producto(2, "Chocolate Fudge", 25.00)
];

const carrito = new Carrito(); 

function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProductos(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    document.getElementById("listado-compra").innerHTML = carrito.listarProductos();
    document.getElementById("total").innerHTML = carrito.listarProductos();
}