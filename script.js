// Selectors | Seletores

const textInput = document.querySelector('#text-input');
const fileInput = document.querySelector('#meme-insert');
const textImage = document.querySelector('#meme-text');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');


// Functions | Funções

function insertTextImage() {
  const text = textInput.value;
  textImage.innerText = text;
}

function insertImage(event) {
  let img = document.querySelector('#meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = function () {
    URL.revokeObjectURL(img.src); // free memory
  }
}

function fireBorder() {
  let imgContainer = document.querySelector('#meme-image-container');
  imgContainer.style.border = '3px dashed red';
}

function waterBorder() {
  let imgContainer = document.querySelector('#meme-image-container');
  imgContainer.style.border = '5px double blue';
}

function earthBorder() {
  let imgContainer = document.querySelector('#meme-image-container');
  imgContainer.style.border = '6px groove green';
}

// Event Listeners | Eventos

textInput.addEventListener('input', insertTextImage);
fileInput.addEventListener('change', insertImage);
btnFire.addEventListener('click', fireBorder);
btnWater.addEventListener('click', waterBorder);
btnEarth.addEventListener('click', earthBorder);
