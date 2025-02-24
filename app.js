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


function sortearAmigo (){
    if(friends.length === 0){
        alert("Nothing has been entered 🤬🤬");
    } else if (friends.length === 1) {
        alert("You must add at least two friends 🐧🧟‍♂️👥");
    } else{
        let indiceAleatorio = friends[Math.floor(Math.random ()*friends.length)];
        let result = document.getElementById('resultado');
        result.textContent = '';
        
        let makeLi2 = document.createElement('li');
        makeLi2.textContent = `The secret friend was: ${indiceAleatorio} `;
        result.appendChild(makeLi2);
    }
}
