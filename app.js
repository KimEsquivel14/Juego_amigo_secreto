// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Lista para guardar los nombres

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; 
    if (nombre !== "") { 
        amigos.push(nombre); 
        mostrarLista(); 
        document.getElementById("amigo").value = ""; 
    } else {
        alert("Por favor, escribe un nombre."); 
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) { 
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        lista.appendChild(item); 
    }
}
function sortearAmigo() {
    if (amigos.length < 2) { 
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let resultado = []; 
    let amigosDisponibles = [...amigos]; 

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posibles = []; 

        
        for (let j = 0; j < amigosDisponibles.length; j++) {
            if (amigosDisponibles[j] !== amigo) {
                posibles.push(amigosDisponibles[j]);
            }
        }

        if (posibles.length === 0) { 
            alert("No se pudo completar el sorteo. Inténtalo de nuevo.");
            return;
        }

        // Seleccionar un amigo al azar
        let indiceAleatorio = Math.floor(Math.random() * posibles.length);
        let amigoSecreto = posibles[indiceAleatorio];
        
        resultado.push(amigo + " tiene como amigo secreto a " + amigoSecreto);

        // Eliminar al amigo asignado de la lista de disponibles
        for (let k = 0; k < amigosDisponibles.length; k++) {
            if (amigosDisponibles[k] === amigoSecreto) {
                amigosDisponibles.splice(k, 1);
                break;
            }
        }
    }

    mostrarResultado(resultado); 
}

function mostrarResultado(resultado) {
    let listaResultado = document.getElementById("resultado"); 
    listaResultado.innerHTML = ""; 

    for (let i = 0; i < resultado.length; i++) { 
        let item = document.createElement("li"); 
        item.textContent = resultado[i]; 
        listaResultado.appendChild(item); 
    }
}
function reiniciarJuego() {
    console.log("Reiniciando sorteo...");
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
    alert("Se ha reiniciado el sorteo."); 
}