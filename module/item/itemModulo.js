export function item() {
  const item = document.createElement('div');
  item.className = 'item';

  const caja = document.createElement('div');
  caja.className = 'caja';
  item.appendChild(caja);

  // total
  const divNumero = document.createElement('div');
  divNumero.className = 'numero';
  divNumero.innerText = 'Q. 0.00';
  caja.appendChild(divNumero);

  // inputs
  const divProductos = document.createElement('div');
  divProductos.className = 'contenedor';
  caja.appendChild(divProductos);

  const divNombre = document.createElement('input');
  divNombre.className = 'nombre';
  divNombre.placeholder = 'Nombre del producto';
  divProductos.appendChild(divNombre);

  const precio = document.createElement('input');
  precio.className = 'precio';
  precio.placeholder = 'Precio del producto';
  divProductos.appendChild(precio);

  const botonEnter = document.createElement('button');
  botonEnter.className = 'enter';
  botonEnter.innerText = 'Listo';
  caja.appendChild(botonEnter);

  // lista visual
  const listaProductosCont = document.createElement("div");
  listaProductosCont.className = 'lista-productos';
  caja.appendChild(listaProductosCont);

  // array temporal en memoria
  let productos = [];
  let totalActual = 0;

  function actualizarTotal() {
    totalActual = productos.reduce((acc, p) => acc + Number(p.precio || 0), 0);
    divNumero.innerText = `Q. ${totalActual.toFixed(2)}`;
  }

  function dibujarProducto(prod, index) {
    const productoDiv = document.createElement("div");
    productoDiv.className = "item-producto";
    productoDiv.innerText = `${prod.nombre} - Q. ${Number(prod.precio).toFixed(2)}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "❌";
    btnEliminar.style.marginLeft = "10px";
    productoDiv.appendChild(btnEliminar);

    listaProductosCont.appendChild(productoDiv);

    btnEliminar.addEventListener("click", () => {
      // eliminar del array
      productos.splice(index, 1);
      // eliminar del DOM
      listaProductosCont.removeChild(productoDiv);
      actualizarTotal();
      // volver a dibujar índices correctos
      listaProductosCont.innerHTML = "";
      productos.forEach((p, i) => dibujarProducto(p, i));
    });
  }

  botonEnter.addEventListener("click", () => {
    const nombre = divNombre.value.trim();
    const precioValor = parseFloat(precio.value.trim().replace(',', '.'));

    if (!nombre || isNaN(precioValor)) {
      alert("Por favor ingresa un nombre y un precio válido");
      return;
    }

    productos.push({ nombre, precio: precioValor });
    dibujarProducto({ nombre, precio: precioValor }, productos.length - 1);
    actualizarTotal();

    divNombre.value = '';
    precio.value = '';
    divNombre.focus();
  });

  return item;
}
