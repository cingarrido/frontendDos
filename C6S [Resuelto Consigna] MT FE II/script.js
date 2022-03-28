let container = document.querySelector(".contenedor");
const urlsImg = [];

let countImg = parseInt(prompt("Ingresa el numero de imágenes que deseas cargar, formato entero (ej: 4, 6...)"));

for (let i = 0; i < countImg; i++) {
  const element = prompt(`Ingresa la url para la Imagen ${i + 1}`);
  urlsImg.push(element);
}

function CreateImg(url, index) {
  let template = `<a href="${url}" target="_blank">
  <img src="${url}" class="imagen" alt="imagen-${index}" id="imagen-${index}" width='250px' />
  </a>`;

  let div = document.createElement("div");
  div.setAttribute("class", "tarjeta");
  div.innerHTML = template;
  return div;
}

function CreateElements(urlArray = []) {
  urlArray.forEach((url, index) => {
    container.appendChild(CreateImg(url, index));
  })
}

/*
function CreateElements(urlArray = []) {
  urlArray.forEach((url, index) => {
    let tarjeta = document.createElement('div');
    tarjeta.classList.toggle('tarjeta');

    let link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    
    let imagen = document.createElement('img');
    imagen.setAttribute('src', url);
    imagen.setAttribute('class', 'imagen');
    imagen.setAttribute('alt', `imagen-${index}`);
    imagen.setAttribute('id', `imagen-${index}`);
    imagen.setAttribute('width', '250px');

    tarjeta.appendChild(link);
    link.appendChild(imagen);
    container.appendChild(tarjeta);
  })
}
*/

CreateElements(urlsImg);