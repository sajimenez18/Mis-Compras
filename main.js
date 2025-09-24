import { header } from "./components/header/header.js";
import { item } from "./module/item/itemModulo.js"
import { obtenerProductos, guardarProductos } from "./control/miLocalStorange.js";

function seccion() {
    let seccion = document.createElement('section');
    seccion.className = 'todo';

    let listaProductos = obtenerProductos();
    
    if (!listaProductos || listaProductos.length === 0) {
        listaProductos = [];
        guardarProductos(listaProductos);
    }

    console.log("Productos cargados:", listaProductos);

    seccion.appendChild(header());
    seccion.appendChild(item());

    return seccion;
}
document.body.appendChild(seccion());