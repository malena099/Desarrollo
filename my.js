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
   
const url = "https://script.google.com/macros/s/AKfycbyqIVnwV7clO3BphXRiZKC_xx9rusJv3GpGVC4AvAOB_aMsURvC89WbBFxS8xnOdTB0/exec";


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
                "tecnologia":data[row][6],
                "modulo":data[row][7]
            }
        )
        
        marcas.add(data[row][0])
    }
    loadSelect("marcas", marcas);
    loadSelect2();
    loadSelect3();
    mostrarImagen();
    mostrarImagen("Toyota","Prius","1997-2003");
    SelectCelda();
    SelectCelda("Toyota","Prius","1997-2003");
}
//colocamos los datos en un archivo json con su formato
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
            imagenes.push(coche["modulo"])
        }
    }
    
    return modulos;
}