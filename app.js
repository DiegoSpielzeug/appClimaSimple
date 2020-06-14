
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
//Accedemos a la informacion que esta escrita en el input
function cargarInfo(e){
    let ciudad =e.target.value
    //ejecutamos la funcion
    cargarDatos(ciudad);
}
//Accedemos a la API y extraemos los datos en JSON
 function cargarDatos(ciudad){
     fetch(`${api.url}find?q=${ciudad}&units=metric&appid=${api.key}`)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
           return mostrarResultados(data);
        })
}
//Esta funcion muestra los datos obtenidos de la API en el DOM
 function mostrarResultados(info){

    //creamos una variable para acceder a los vatos con mayor facilidad.
    let lugar = info.list[0];

    //seleccionamos el elemento donde sera remplazada la informacion que extragimos del API Y la cambiamos.
    let uiCiudad = document.querySelector('.contry');
    uiCiudad.innerHTML = `${lugar.name},${lugar.sys.country}`;

    
    /*creamos una variable para obtener la fecha actual e incertamos una funcion que construira la fecha
    //seleccionamos el elemento donde sera remplazada la informacion que extragimos del API Y la cambiamos.*/
    let fechaActual = new Date();
    let uiFecha = document.querySelector('.date');
    uiFecha.innerHTML = construirFecha(fechaActual);

    //seleccionamos el elemento donde sera remplazada la informacion que extragimos del API Y la cambiamos.
    let uiGrados = document.querySelector('.tiempo');
    uiGrados.innerHTML = `${lugar.main.temp}c<span>°</span>`;

    //seleccionamos el elemento donde sera remplazada la informacion que extragimos del API Y la cambiamos.
    let uiClima = document.querySelector('.clima');
    uiClima.innerHTML = `${lugar.weather[0].main}`;
}
//es la funcion que construye la fecha
 function construirFecha(fechaActual){
    //el metodo con el que otenemos los meses retorna el numero del mes entonces creamos un array para elegir el mes segun el numero que arroje
    let meses = ["Januar","Februar", "März","April",
                "Mai","Juni","Juli","August",
                "September","Oktober","November","dezember"];
    // igual que la variable meses.
    let dias = ["Montag","Dienstag","Mittwoch","Donnerstag",
                "Freitag","Samstag","Sonntag"];

    let año = fechaActual.getFullYear();
    let mes = meses[fechaActual.getMonth()];
    let dia = dias[fechaActual.getDay()];
    let diaNumero = fechaActual.getDate();

    //retornamos lo anterior de una manera acomodada para poder ser agregado al DOM
    return `${dia} ${diaNumero} ${mes} ${año}` ;
}















