const input = document.querySelector('.input');
const memeText = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const meme = document.querySelector('#meme-image');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');

function setTextMeme() {
  memeText.innerText = input.value;
}

function changeMeme(event) {
  meme.src = URL.createObjectURL(event.target.files[0]);
}

function setEvent() {
  input.addEventListener('keyup', setTextMeme);
  insertImage.addEventListener('change', changeMeme);
}

setEvent();
