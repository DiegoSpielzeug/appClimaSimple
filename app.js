
//variables
const api =
{
    key:'950568ddd39eb5c425cc70889b304a39',
    url: 'http://api.openweathermap.org/data/2.5/'
} 
const searchBox = document.querySelector('.search-box');

//evenlisteners
eventos();

function eventos(){
    searchBox.addEventListener('blur', cargarInfo);
};

//FUNCIONES
function cargarInfo(e){
    let ciudad =e.target.value
    cargarDatos(ciudad);
    
}
 function cargarDatos(ciudad){
     fetch(`${api.url}find?q=${ciudad}&units=metric&appid=${api.key}`)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
            mostrarResultados(data);
        })
}
 function mostrarResultados(info){

    let lugar = info.list[0];

    let uiCiudad = document.querySelector('.contry');
    uiCiudad.innerHTML = `${lugar.name},${lugar.sys.country}`;

    let fechaActual = new Date();
    let uiFecha = document.querySelector('.date');
    uiFecha.innerHTML = construirFecha(fechaActual);

    let uiGrados = document.querySelector('.tiempo');
    uiGrados.innerHTML = `${lugar.main.temp}c<span>°</span>`;

    let uiClima = document.querySelector('.clima');
    uiClima.innerHTML = `${lugar.weather[0].main}`;
}
 function construirFecha(fechaActual){
    let meses = ["Januar","Februar", "März","April",
                "Mai","Juni","Juli","August",
                "September","Oktober","November","dezember"];

    let dias = ["Montag","Dienstag","Mittwoch","Donnerstag",
                "Freitag","Samstag","Sonntag"];

    let año = fechaActual.getFullYear();
    let mes = meses[fechaActual.getMonth()];
    let dia = dias[fechaActual.getDay()];
    let diaNumero = fechaActual.getDate();

    return `${dia} ${diaNumero} ${mes} ${año}` ;
}











//https://www.youtube.com/watch?v=n4dtwWgRueI













///colima&units=metric&appid=