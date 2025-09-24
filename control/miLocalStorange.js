const LOCAL_STORAGE_KEY = 'CARRITO';

function guardarProductos(tareas) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tareas));
}

function obtenerProductos() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export { LOCAL_STORAGE_KEY, obtenerProductos, guardarProductos };
