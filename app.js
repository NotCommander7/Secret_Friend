// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = []; 

// funcionalidad extra que se vio en clase para modificar texto a los tag del HTML
function asignarTextoElemento (tag,text){
    let etiqueta = document.querySelector(tag);
    etiqueta.textContent = text;
}

asignarTextoElemento ('h1', 'Secret Friend');
asignarTextoElemento ('h2',"Enter your friends' names");
asignarTextoElemento ('#boton1','Add');


// funcion para agregar amigos
function addFriend (){
let capture = document.getElementById('amigo').value; // capturamos lo que ingrese el usuario

if (capture === ''){ // validamos que si se haya ingresado algún valor
    alert("Please, enter a name 🤞🥲🤕");
} 
    friends.push(capture);
    document.getElementById('amigo').value = ''; // limpiamos el campo de entrada
    recorrido();


}

function recorrido (){
     let list = document.querySelector('#listaAmigos'); //apuntamos al elemento
     list.textContent = ''; // limpiamos la lista 
     
    for(let i = 0; i < friends.length; i++){ // se itera sobre los elementos del arreglo 
        let makeLi = document.createElement('li');
        makeLi.textContent = friends[i];
        list.appendChild(makeLi);
    }

}


function sortearAmigo (){
    if(friends.length < 1){
        alert("Nothing has been entered 🤬🤬"); //alerta que salta si no se han ingresado valores
        
    } else if (friends.length === 1){
        alert("You must add at least two friends 🐧🧟‍♂️👥"); // si solo hay un valor ingresado
    }
        else{
        let indiceAleatorio = friends[Math.floor(Math.random ()*friends.length)]; //genero un indice aleatorio
        let result = document.getElementById('resultado');
        result.textContent = '';
        
        let makeLi2 = document.createElement('li');
        makeLi2.textContent = `The secret friend was: ${indiceAleatorio} `;
        result.appendChild(makeLi2);
    }
}
