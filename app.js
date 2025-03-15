// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Lista para guardar los nombres

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Obtiene el nombre del campo de texto

    if (nombre !== "") { // Si el campo no está vacío
        amigos.push(nombre); // Agrega el nombre a la lista
        mostrarLista(); // Muestra la lista en la pantalla
        document.getElementById("amigo").value = ""; // Limpia el campo de texto
    } else {
        alert("Por favor, escribe un nombre."); // Muestra un mensaje si el campo está vacío
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtiene la lista del HTML
    lista.innerHTML = ""; // Limpia la lista

    for (let i = 0; i < amigos.length; i++) { // Recorre la lista de amigos
        let item = document.createElement("li"); // Crea un nuevo elemento <li>
        item.textContent = amigos[i]; // Agrega el nombre al <li>
        lista.appendChild(item); // Añade el <li> a la lista en el HTML
    }
}
function sortearAmigo() {
    if (amigos.length < 2) { // Verifica que haya al menos 2 amigos
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let resultado = []; // Lista para guardar las asignaciones
    let amigosDisponibles = [...amigos]; // Copia de la lista de amigos

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posibles = []; // Lista de opciones válidas

        // Llenar la lista de opciones válidas
        for (let j = 0; j < amigosDisponibles.length; j++) {
            if (amigosDisponibles[j] !== amigo) {
                posibles.push(amigosDisponibles[j]);
            }
        }

        if (posibles.length === 0) { // Si no hay opciones válidas, reinicia el sorteo
            alert("No se pudo completar el sorteo. Inténtalo de nuevo.");
            return;
        }

        // Seleccionar un amigo al azar
        let indiceAleatorio = Math.floor(Math.random() * posibles.length);
        let amigoSecreto = posibles[indiceAleatorio];

        // Guardar el resultado
        resultado.push(amigo + " tiene como amigo secreto a " + amigoSecreto);

        // Eliminar al amigo asignado de la lista de disponibles
        for (let k = 0; k < amigosDisponibles.length; k++) {
            if (amigosDisponibles[k] === amigoSecreto) {
                amigosDisponibles.splice(k, 1);
                break;
            }
        }
    }

    mostrarResultado(resultado); // Muestra el resultado
}

function mostrarResultado(resultado) {
    let listaResultado = document.getElementById("resultado"); // Obtiene la lista del HTML
    listaResultado.innerHTML = ""; // Limpia la lista

    for (let i = 0; i < resultado.length; i++) { // Recorre los resultados
        let item = document.createElement("li"); // Crea un nuevo elemento <li>
        item.textContent = resultado[i]; // Agrega el texto al <li>
        listaResultado.appendChild(item); // Añade el <li> a la lista en el HTML
    }
}
function reiniciarJuego() {
    console.log("Reiniciando sorteo...");
    amigos = []; // Limpia la lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista de amigos
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado
    alert("Se ha reiniciado el sorteo."); // Muestra un mensaje
}