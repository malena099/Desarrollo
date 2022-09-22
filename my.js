//llamamos al api
const loader = document.querySelector('.preload');
const emoji = loader.querySelector('.emoji');

const emojis = ["🕐", "🕜", "🕑","🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢",  "🕗", "🕣", "🕘", "🕤", "🕙",  "🕥", "🕚", "🕦",  "🕛", "🕧"];

const interval = 125;

const loadEmojis = (arr) => {
    setInterval(() => {
      emoji.innerText = arr[Math.floor(Math.random() * arr.length)];
      //console.log(Math.floor(Math.random() * arr.length))
    }, interval);
}

const init = () => {
  loadEmojis(emojis);
}
init();

let coches, marcas;
   
const url = "https://script.google.com/macros/s/AKfycby9I2uk16F0g7XsJOlcxkC4xNoRSuNC6UKGoawn9AnDLmTAGdTCYy4dtghSPQiOqY-K/exec";


fetch(url)
    .then(response => response.json())
    .then(data => {
        loadCars(data);
        document.querySelector(".preload").style.display="none"})

function loadCars(data) {
    coches = []
    
    marcas = new Set()
    
    for (let row in data) {
        coches.push(
            {
                "marca": data[row][0],
                "modelo": data[row][1],
                "fechas": data[row][2],
                "urlImagen": data[row][3],
                "urlCeldas": data[row][4],
                "voltaje":data[row][5],
                "NumCell":data[row][6],
                "tecnologia":data[row][7],
                "modulo":data[row][8],
                "MinVolt":data[row][9],
                "MaxVolt":data[row][10]
            }
        )
        marcas.add("Elige coche");
        marcas.add(data[row][0])
    }
    loadSelect("marcas", marcas);
    marcasSelect.addEventListener("change", loadSelect2);
    modelsSelect.addEventListener("change", loadSelect3);
}
//colocamos los datos en un archivo json con su formato
function getModelosForMarca(marca) {
    
    let models = new Set()
    
    for (let coche of coches) {
        models.add("Elige Modelo");
        if (coche["marca"] === marca) {
            models.add(coche["modelo"])
        }
    }
    
    return models;
}

function getFechasForMarcaAndModelo(marca, modelo) {

    let fechas = new Set()
            
    for (let coche of coches) {
        fechas.add("Elige Fecha");
        if (coche["marca"] === marca && coche["modelo"] === modelo) {
            fechas.add(coche["fechas"])
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

function getUrlCeldasForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let celdas = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            celdas.push(coche["urlCeldas"])
        }
    }
    
    return celdas;
}

function getvoltajeForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let voltajenom = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            voltajenom.push(coche["voltaje"])
        }
    }
    
    return voltajenom;
}

function getNumCellForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let ncell = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            ncell.push(coche["NumCell"])
        }
    }
    
    return ncell;
}

function getTecnologiaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let tec = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            tec.push(coche["tecnologia"])
        }
    }
    
    return tec;
}

function getModuloForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let modulos = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            modulos.push(coche["modulo"])
        }
    }
    
    return modulos;
}

function getMinVoltForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let mvolt = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            mvolt.push(coche["MinVolt"])
        }
    }
    
    return mvolt;
}

function getMaxVoltForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let mxvolt = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            mxvolt.push(coche["MaxVolt"])
        }
    }
    
    return mxvolt;
}