let coches, marcas;
   
const url = "https://script.google.com/macros/s/AKfycbzGx73keTTbFXN8KJluAQzvc-Ta453N8U-gfzAGMT9shSrwS3S5izyM9ouJDd5NHyTL/exec";

fetch(url)
    .then(response => response.json())
    .then(data => loadCars(data));

function loadCars(data) {
    coches = []
    
    marcas = new Set()
    
    for (let row in data) {
        coches.push(
            {
                "marca": data[row][0],
                "modelo": data[row][1],
                "fechas": data[row][2],
                "urlImagen": data[row][3]
            }
        )
        
        marcas.add(data[row][0])
    }
    loadSelect("marcas", marcas);
    loadSelect2();
    loadSelect3();
    mostrarImagen();
}

function getModelosForMarca(marca) {
    
    let models = new Set()
    
    for (let coche of coches) {
        if (coche["marca"] === marca) {
            models.add(coche["modelo"])
        }
    }
    
    return models;
}

function getFechasForMarcaAndModelo(marca, modelo) {
    let fechas = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo) {
            fechas.push(coche["fechas"])
        }
    }
    
    return fechas;
}

function getUrlImagenForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let imagenes = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            imagenes.push(coche["urlImagen"])
        }
    }
    
    return imagenes;
}


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