const noticias = [
    {
        titulo: "Turismo de vacunas: 2.000 personas por día reciben su dosis en aeropuerto de Miami",
        imgUrl: "https://i.pinimg.com/236x/96/ae/5c/96ae5cb7580c229d025ee50f096e56bd.jpg",
        fecha: "07/06/21",
        tipoNacional: true
    },
    {
        titulo: "El gran gesto por amor de Jennifer Lopez hacia BenAffleck",
        imgUrl: "https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdameditorialTelevisamexicomuyinteresantemxciencia161028homero-borracho.imgo_-1280x720.jpg",
        descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
        fecha: "02/06/21",
        tipoNacional: false
    },
    {
        titulo: "Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl: "https://media.lmneuquen.com/p/8cec7312e0c4abc7accdbe50608a3be0/adjuntos/195/imagenes/006/947/0006947904/770x0/smart/a-bresh-neuquenpng.png",
        descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación.Paso a paso para evitar que se empañen",
        fecha: "01/06/21",
        tipoNacional: true
    }, {
        titulo: "La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
        imgUrl: "https://tuapppara.com/wp-content/uploads/2017/09/VideosGraciososAnimales.png",
        descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
        fecha: "04/06/21",
        tipoNacional: false
    },
    {
        titulo: "Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl: "https://preview.redd.it/eqifcuvgqr181.jpg?auto=webp&s=009bbca8e74915ad91dd845a21c44bcdf7ca2379",
        descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
        fecha: "07/06/21",
        tipoNacional: true
    },
];

/*
<section class="item">
            <h2>Turismo de vacunas: 2.000 personas por día reciben su
                dosis en el aeropuerto de Miami</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mango_-_single.jpg/1200px-Mango_-_single.jpg" alt="noticia-1"></img>
            <p class="descripcion"></p>
        <p>07/06/21</p>
        </section>
*/

let contenedor = document.querySelector(".contenedor");

/* Aquí nos aseguramos que al cargar la página se muestren todas las noticias, claro por el momento es  muy básico, pero suponiendo que hay otras secciones en la Web, cuando estás carguen, se generan las noticias en el HTML
*/

window.onload = function () {
    
    function crearNoticia(titulo, descripcion, imagen, fecha, tipo, indice) {

        let tipoNoticia = tipo ? "item" : "item item-dif";

        return `<section class="${tipoNoticia}">
        <h2>${titulo}</h2>
        <img src="${imagen}" alt="noticia-${indice}"></img>
        <p class="descripcion">${descripcion}</p>
        <p>${fecha}</p>
        </section>`;
    }

    noticias.forEach((noticia, index) => {
        /*
        contenedor.innerHTML += crearNoticia(noticia.titulo, noticia.descripcion, noticia.imgUrl, noticia.fecha, noticia.tipoNacional, index);
        */
        contenedor.appendChild(document.createRange().createContextualFragment(crearNoticia(noticia.titulo, noticia.descripcion, noticia.imgUrl, noticia.fecha, noticia.tipoNacional, index)));
    });
}