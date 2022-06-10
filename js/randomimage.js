const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.webp", "img2.jpeg", "img3.jpeg", "img4.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    image.src = "images/" + images[randomIndex];
}