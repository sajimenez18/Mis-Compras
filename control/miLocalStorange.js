const CARRITO = 'carrito';

function guardarProducto(producto) {
    localStorage.setItem(CARRITO, JSON.stringify(producto));
}

function obtenerProductos(){
    return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

export { CARRITO, guardarProducto, obtenerProductos };