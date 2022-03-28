
const formulario = document.querySelector('form');
// ☝ alternativa 👇
// const formulario = document.forms[0];

const nombre = document.querySelector('#nombre')
const contrasenia = document.querySelector('#pass');
const telefono = document.querySelector('#tel');
const hobbies = document.querySelectorAll('#listado-hobbies input');
const nacionalidades = document.getElementsByName('nacionalidad');

formulario.addEventListener('submit', function (event) {
    // frenar el envío por defecto
    console.log('State: Loading...');
    event.preventDefault();

    let lista = [];
    hobbies.forEach(hobbie => {
        if (hobbie.checked) {
            console.log(hobbie.id);
            lista.push(hobbie.id);
        }
    });

    let pais;
    nacionalidades.forEach(radio => {
        if (radio.checked) {
            console.log(radio.id);
            pais = radio.id;
        }
    });


    // armo un objeto con la info como para enviarla al servidor
    if (validarNombre(nombre.value)) {
        console.log(normalizar(nombre.value, contrasenia.value, telefono.value, lista, pais));
    }
    else {
        let message = 'Nombre Invalido... No ingreses números por favor';
        let log = document.querySelector('p');
        log.style.setProperty('color', 'crimson')
        log.innerText = message;
        setTimeout(() => {
            log.innerText = '';
        }, 2000)
    }



});


/* -------------------------------- FUNCIONES ------------------------------- */
function normalizar(nom, pass, tel, listadoHobbies, nacionalidad) {
    console.log('State: Normalize dates...');

    const datos = {
        name: nom[0].toUpperCase() + nom.slice(1).toLowerCase(),
        password: pass,
        phone: tel,
        hobbies: listadoHobbies,
        nationality: nacionalidad
    }

    return datos;
}


// Para ejercitar, desarrollar esta funcion para validar que el nombre:
// -> recibe un nombre
// - tiene que ser una sola palabra
// - no puede tener mas de 20 caracteres
// - no puede contener numeros
// <- devuelve un booleano true si está bien, false si no cumple
// Luego probar la validación antes de realizar la normalizacion
function validarNombre(nombre) {
    console.log('State: Validate name...');
    let onlyWord = nombre.split(' ').length === 1;
    let lessTwentyChar = nombre.length <= 20;
    let withoutNumbers = !/\d/.test(nombre);
    return onlyWord && lessTwentyChar && withoutNumbers;
}