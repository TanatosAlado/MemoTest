let arrayInicial = ["a","a","b","b","c","c","d","d","e","e","f","f","g","g","h","h"]
let arrayOrden = []



function destapar(id){
    console.log(id)
}

function iniciar(){
    arrayOrden = arrayInicial.sort(function() { return Math.random() - 0.5 });
    console.log(`Arreglo Orden: ${arrayOrden}`)
}


var arr1 = ["a", "b", "c", "d"];
arr1.sort(function() { return Math.random() - 0.5 });
console.log(arr1)