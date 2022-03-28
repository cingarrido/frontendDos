/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */


function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 
  const datosPersona=[]
  nombre = prompt("Ingresa tu nombre");
  edad = parseInt(prompt("Ingresa tu anio de nacimiento"));
  ciudad = prompt("Ingresa tu ciudad");
  interesPorJs = confirm("te interesa JS?")? "si": "no";
  
  datosPersona.push(nombre,edad,ciudad,interesPorJs);
 
  console.log (datosPersona);

 
}








  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  

  function renderizarDatosUsuario() {
    let persona = document.querySelector("#nombre");
    let anios = document.querySelector("#edad");
    let locacion = document.querySelector("#ciudad");
    let interes = document.querySelector("#javascript");
    persona.innerHTML = nombre;
    anios.innerHTML = (2022 - edad);
    locacion.innerHTML = ciudad;
    interes.innerHTML = interesPorJs;
  }






function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  let contenedor = document.getElementById("fila");
    
    function crearTarjeta(imgUrl,lenguajes, bimestre) {


  return `<section class="caja">
  <img src="${imgUrl}" alt="${lenguajes}"></img>
  <p class="lenguajes">${lenguajes}</p>
  <p class="bimestre">${bimestre}</p>
  </section>`
    
    };
      listado.forEach(function(listado, index){
        contenedor.innerHTML += crearTarjeta( listado.imgUrl, listado.bimestre,listado.lenguajes, index);
      })
  
};


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let lugar= document.getElementById("sitio");
 lugar.classList.toggle ("dark")
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keypress", function(e){
  if (e.key=== "f"){
let descripcion= document.getElementById("sobre-mi");
descripcion.style.visibility= "visible";
  }else{};
})
