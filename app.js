
//variavles
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


//FINCIONES
function cargarInfo(e){
    let ciudad =e.target.value
    cargarDatos(ciudad);
}
async function cargarDatos(ciudad){
    await fetch(`${api.url}find?q=${ciudad}&units=metric&appid=${api.key}`)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(data => {
           mostrarResultados(data);
        })
}
 function mostrarResultados(data){
    console.log(data);
}






















///colima&units=metric&appid=