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
   
const url = "https://script.google.com/macros/s/AKfycbx1cXOYpyXB_gtjIoFIql7tOAwVvEr6NsbKLzUIh5v9WF9IWUPIijj51tTcv5rjcIVB/exec";


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
                "tecnologia": data[row][4],
                "urlCeldas":data[row][5],
                "voltaje":data[row][6],
                "MinVolt":data[row][7],
                "MaxVolt":data[row][8],
                "Carga":data[row][9],
                "CorrienteCarga":data[row][10],
                "Temperatura":data[row][11],
                "urlModulo":data[row][12],
                "voltaje2":data[row][13],
                "MinVolt2":data[row][14],
                "MaxVolt2":data[row][15],
                "Carga2":data[row][16],
                "CorrienteCarga2":data[row][17],
                "Temperatura2":data[row][18]
            }
        )
        marcas.add("Elige coche");
        marcas.add(data[row][0])
    }
    loadSelect("marcas", marcas);
    marcasSelect.addEventListener("change", loadSelect2);
    marcasSelect.addEventListener("change", loadSelect3);
    modelsSelect.addEventListener("change", loadSelect3);
    marcasSelect.addEventListener("change", ocultarImagen);
    modelsSelect.addEventListener("change", ocultarImagen);
    fechaSelect.addEventListener("change",mostrarImagen);
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

/* function getNumCellForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let ncell = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            ncell.push(coche["NumCell"])
        }
    }
    
    return ncell;
} */

function getTecnologiaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let tec = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            tec.push(coche["tecnologia"])
        }
    }
    
    return tec;
}

function geturlModuloForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let modulos = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            modulos.push(coche["urlModulo"])
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

function getCargaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let cargax = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            cargax.push(coche["Carga"])
        }
    }
    
    return cargax;
}

/* function getMinCargaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let cargamin = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            cargamin.push(coche["MinCarga"])
        }
    }
    
    return cargamin;
}

function getMaxCargaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let cargamax = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            cargamax.push(coche["MaxCarga"])
        }
    }
    
    return cargamax;
}
 */


function getCorrienteCargaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let cargacor = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            cargacor.push(coche["CorrienteCarga"])
        }
    }
    
    return cargacor;
}

function getTemperaturaCargaForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let temp = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            temp.push(coche["Temperatura"])
        }
    }
    
    return temp;
}

function getvoltaje2ForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let voltajenom2 = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            voltajenom2.push(coche["voltaje2"])
        }
    }
    
    return voltajenom2;
}

function getMinVolt2ForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let mvolt2 = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            mvolt2.push(coche["MinVolt2"])
        }
    }
    
    return mvolt2;
}

function getMaxVolt2ForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let mxvolt2 = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            mxvolt2.push(coche["MaxVolt2"])
        }
    }
    
    return mxvolt2;
}

function getCarga2ForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let cargax2 = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            cargax2.push(coche["Carga2"])
        }
    }
    
    return cargax2;
}

function getCorrienteCarga2ForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let cargacor2 = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            cargacor2.push(coche["CorrienteCarga2"])
        }
    }
    
    return cargacor2;
}

function getTemperatura2ForMarcaAndModeloAndFecha(marca, modelo, fechas) {
    let temp2 = []
    
    for (let coche of coches) {
        if (coche["marca"] === marca && coche["modelo"] === modelo && coche["fechas"]=== fechas) {
            temp2.push(coche["Temperatura2"])
        }
    }
    
    return temp2;
}