// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = [];



// funcion para agregar amigos

let capture = document.getElementById('amigo').value; // capturamos lo que ingrese el usuario

if (capture === ''){
    alert("Please, enter a name");
} else{
    friends.push(capture);
    capture.getElementById('amigo').value = ''; // limpiamos el campo de entrada
}
