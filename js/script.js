let arrayInicial = ["attaque77","attaque77","catupecu","catupecu","divididos","divididos","dosminutos","dosminutos","laRenga","laRenga","patricioRey","patricioRey","rata","rata","soda","soda"]
let arrayOrden = []
let arrayCompleto = []
let opcion1 = "vacio"
let opcion2 = "vacio"
let pieza1 = 0;
let pieza2 = 0;
let aciertos = 0;



function destapar(id){
    if (arrayCompleto[parseInt(id) - 1].girado==false){
        arrayCompleto[parseInt(id) - 1].girado=true;
        let cadena = `foto${id}`
        let ponerImagen = document.getElementById(cadena)
        ponerImagen.src = arrayCompleto[parseInt(id) - 1].imagen;
        if(opcion1 === "vacio"){
            opcion1 = arrayCompleto[parseInt(id) - 1].nombre
            pieza1 = parseInt(id) - 1
            

        }else{
            opcion2= arrayCompleto[parseInt(id) - 1].nombre
            pieza2 = parseInt(id) - 1
            coincidencia(opcion1, opcion2, pieza1, pieza2)
        }
    }
    else{
        console.log("Pieza ya girada")
    }
}

function coincidencia(clave1, clave2, pieza1, pieza2){
    if(clave1 == clave2){
        aciertos ++;
        arrayCompleto[parseInt(pieza1)].bloqueado=true
        arrayCompleto[parseInt(pieza2)].bloqueado=true
        pieza1 = 0;
        pieza2 = 0;
        opcion1 = "vacio";
        opcion2 = "vacio";
    }
    else{
        setTimeout(() => {
            restablecer(pieza1, pieza2)
        }, 1000);
    }
}

function restablecer(pieza1, pieza2){
    arrayCompleto[parseInt(pieza1)].girado=false;
    arrayCompleto[parseInt(pieza2)].girado=false;
    let soporte1 = parseInt(pieza1) + 1;
    let cadena1 = `foto${soporte1}`
    let ponerImagen = document.getElementById(cadena1)
    ponerImagen.src = ".//src/signo.png";
    let soporte2 = parseInt(pieza2) + 1;
    let cadena2 = `foto${soporte2}`
    let ponerImagen2 = document.getElementById(cadena2)
    ponerImagen2.src = ".//src/signo.png";
    pieza1 = 0;
    pieza2 = 0;
    opcion1 = "vacio"
    opcion2 = "vacio"
}

function iniciar(){
    arrayOrden = arrayInicial.sort(function() { return Math.random() - 0.5 });
    for (i=0; i<16; i++){
        let ruta = `.//src/${arrayOrden[i]}.jpg`
        let llenado = {
            "nombre": arrayOrden[i],
            "bloqueado": false,
            "girado": false,
            "imagen": ruta
        }
        arrayCompleto[i] = llenado;
        let idM = i + 1
        let cadena = `foto${idM}`
        let ponerImagen = document.getElementById(cadena)
        ponerImagen.src = ".//src/signo.png";
        opcion1 = "vacio"
        opcion2 = "vacio"
    }
}


