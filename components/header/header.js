import { descargar } from "../../control/descargar.js";

export function header() {
  let header = document.createElement('header');
  header.className = "header";

  let titulo = document.createElement('h3');
  titulo.className = "titulo";
  titulo.innerText = "Lista de compras";
  header.appendChild(titulo);

  let descarga = document.createElement('div');
  descarga.className = "descarga";
  header.appendChild(descarga);

  let imgDescarga = document.createElement('img');
  imgDescarga.className = "imgDescarga";
  imgDescarga.src = "https://cdn-icons-png.flaticon.com/512/69/69656.png";
  imgDescarga.alt = "Descarga";
  descarga.append(imgDescarga);
  
  descarga.addEventListener('click', () => {
  // ocultar elementos
  document.querySelector('header').style.display = 'none';
  document.querySelectorAll('.enter').forEach(btn => btn.style.display = 'none');

  // hacer captura
  descargar('body').then(() => {
    // volver a mostrar
    document.querySelector('header').style.display = '';
    document.querySelectorAll('.enter').forEach(btn => btn.style.display = '');
  });
});

  return header;
}
