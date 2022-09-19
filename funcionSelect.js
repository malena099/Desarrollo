
//con esto cargamos los selects y mostramos la imagen
function loadSelect(id, values) {
    let selectElement = document.getElementById(id);
    selectElement.innerHTML = ''
    
    for (let value of values) {
        selectElement.add(new Option(value));
    }

}

var marcasSelect = document.getElementById('marcas');
var modelsSelect = document.getElementById('models');
var fechaSelect = document.getElementById('fecha');
var imagen = document.getElementById('imagen');
var cell = document.getElementById('cell');
marcasSelect.addEventListener("change", loadSelect2);
marcasSelect.addEventListener("change", loadSelect3);
modelsSelect.addEventListener("change", loadSelect3);
modelsSelect.addEventListener("change", mostrarImagen);
marcasSelect.addEventListener("change", mostrarImagen);
fechaSelect.addEventListener("change", mostrarImagen);

function loadSelect2() {
     loadSelect('models', getModelosForMarca(marcasSelect.value));
}

function loadSelect3() {
    loadSelect('fecha', getFechasForMarcaAndModelo(marcasSelect.value,modelsSelect.value));
}

function mostrarImagen() {

    if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
    imagen.src = getUrlImagenForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
    $(document).ready(function(){
        $("#botonConfirmacion").fadeIn(1000);
        });
    }
}

//Con esto mostramos la imagen de la celda junto con el texto
function SelectCelda(){
    
    if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
        cell.src = getUrlCeldasForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
        }
}
