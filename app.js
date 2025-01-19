// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendArray = [];

function agregarAmigo(){

    // Seleccionamos y creamos los objetos del DOM que necesitamos.
    const friendValue = document.getElementById('amigo');
    const li = document.createElement('li');
    const friendList = document.getElementById('listaAmigos');
    const errorMessage = document.getElementById('errorMessages');
    const resultado = document.getElementById('resultado').textContent = '';
    let validador = true;

    // Definimos el valor del mensaje de error en vacio para evitar problemas.
    errorMessage.textContent = '';

    // Recorremos el arreglo con los nombres para validar nombres repetidos
    friendArray.forEach((friend) => {
        validador = friend == friendValue.value ? false:true;
    }); 

    // Validamos si el nombre a ingresar esta repetido.
    if (validador) {
    li.textContent = friendValue.value;
    friendList.append(li);

    friendArray.push(friendValue.value);

    friendValue.value = '';

    console.log(friendArray);
    }else{
        errorMessage.textContent = `¡Error!, el nombre ${friendValue.value} ya se encuentra en la lista`;
    }
    
}

function sortearAmigo(){

    // Seleccionamos el objeto del DOM que vamos a trabajar.
    const resultado = document.getElementById('resultado');
    const friendList = document.getElementById('listaAmigos').innerHTML = '';
    const errorMessage = document.getElementById('errorMessages');

    // Limpiamos el contenido del resultado para evitar problemas.
    resultado.textContent = '';

    // Le asignamos un nombre aleatorio del arreglo.
    if (friendArray.length == 0) {
        errorMessage.textContent = '¡Error!, no has agregado ningún nombre todavia.'
    }else{
    resultado.textContent = `El amigo secreto sorteado es: ${friendArray[Math.floor(Math.random() * friendArray.length)]}`;
    }

    // Reiniciamos el array nuevamente.
    friendArray = [];
}