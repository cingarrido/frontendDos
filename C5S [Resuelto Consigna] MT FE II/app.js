let doc = document;

let body = doc.querySelector('body');
let title = doc.querySelector('h1');
let item = doc.querySelectorAll('div');
let subtitle = doc.querySelectorAll('h2');
let paragraph = doc.querySelectorAll('p');

let darkMode = confirm('¿Quieres cambiar a modo oscuro?');
if (darkMode) {
    body.classList.toggle('dark');
    title.classList.toggle('title');
    item.classList.toggle('item-dark');
    subtitle.classList.toggle('subtitle');
    paragraph.classList.toggle('pha');
}