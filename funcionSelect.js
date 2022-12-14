var marcasSelect = document.getElementById('marcas');
var modelsSelect = document.getElementById('models');
var fechaSelect = document.getElementById('fecha');
var imagen = document.getElementById('imagen');
var cell = document.getElementById('cell');

//con esto cargamos los selects y mostramos la imagen

function loadSelect(id, values) {
    let selectElement = document.getElementById(id);
    selectElement.innerHTML = ''
    for (let value of values) {
        selectElement.add(new Option(value));  
      };
    $('#marcas').change(function(){
        $('#models').removeAttr('disabled');
      });
    }

function loadSelect2() {
    

    if(marcasSelect.value !== "Elige un coche"){
        $('#models').change(function(){
        $('#fecha').removeAttr('disabled');
    });
        loadSelect('models', getModelosForMarca(marcasSelect.value));
    }
}

function loadSelect3() {
        loadSelect('fecha', getFechasForMarcaAndModelo(marcasSelect.value, modelsSelect.value));
        console.log(getFechasForMarcaAndModelo(marcasSelect.value, modelsSelect.value));
}

function mostrarImagen() {
    if(fechaSelect.value !== "Elige Fecha"){
        if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
        imagen.src = getUrlImagenForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
            $(document).ready(function(){
                $("#botonConfirmacion").fadeIn(1000);
        });
       }}
       else{
        ocultarImagen();
       }
}
function ocultarImagen(){
    imagen.src = getUrlImagenForMarcaAndModeloAndFecha("Elige un coche", "Elige el modelo", "Elige Fecha");
    document.getElementById("botonConfirmacion").style.display="none";
}
//Con esto mostramos la imagen de la celda junto con el texto
function SelectCelda(){
    
    if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
        cell.src = getUrlCeldasForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
        }
}

function SelectModule(){
    
    if ("Elige un coche" !== marcasSelect.value && "Elige el modelo" !== modelsSelect.value) {
        cell.src = geturlModuloForMarcaAndModeloAndFecha(marcasSelect.value, modelsSelect.value,fechaSelect.value);
        }
}