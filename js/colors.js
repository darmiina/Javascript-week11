const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["black", "purple", "gold", "pink"];


myButton.addEventListener('click', changeColor);

function changeColor() {
    console.log(myBox);

    let randomIndex = Math.floor(Math.random () * colors.length);
    myBox.style.backgroundColor = colors [randomIndex];
    
}


