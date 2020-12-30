const input = document.querySelector('.input');
const memeText = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const meme = document.querySelector('#meme-image');

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
