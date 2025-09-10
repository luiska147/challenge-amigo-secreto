let amigosSecretos = [];

function agregarAmigo() {
    let obtenerNombreAmigo = document.getElementById("amigo").value;
    console.log(obtenerNombreAmigo);
    
    if(obtenerNombreAmigo == false){
        alert("Por favor, inserte un nombre.");
    } else{
        amigosSecretos.push(obtenerNombreAmigo);
        limpiarCaja();
        actualizarListaAmigos("listaAmigos", amigosSecretos);
    }
return;

}

function limpiarCaja() {
    document.getElementById("amigo").value="";
return;

}

function actualizarListaAmigos(elemento, amigosSecretos){
let elementoHTML = document.getElementById(elemento);
elementoHTML.innerHTML = "";
for (const nombre of amigosSecretos) {
    elementoHTML.innerHTML += `<li>${nombre}</li>`;
}
return;
}

function sortearAmigo() {
    if (amigosSecretos === 0) {
        alert("No hay amigos a sortear, por favor agregar amigos");
        return;
    } else {
        let generarIndiceAleatorio = Math.floor(Math.random()*amigosSecretos.length);
        let nombreSorteado = amigosSecretos[generarIndiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto sorteado es ${nombreSorteado}`;
    }
}
