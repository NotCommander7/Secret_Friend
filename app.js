// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = [];



// funcion para agregar amigos
function addFriend (){
let capture = document.getElementById('amigo').value; // capturamos lo que ingrese el usuario

if (capture === ''){ // validamos que si se haya ingresado algún valor
    alert("Please, enter a name");
} 
    friends.push(capture);
    document.getElementById('amigo').value = ''; // limpiamos el campo de entrada
    recorrido();


}

function recorrido (){
     let list = document.querySelector('#listaAmigos'); //apuntamos al elemento
     list.textContent = ''; // limpiamos la lista 
     
    for(let i = 0; i < friends.length; i++){
        let makeLi = document.createElement('li');
        makeLi.textContent = friends[i];
        list.appendChild(makeLi);
    }

}
