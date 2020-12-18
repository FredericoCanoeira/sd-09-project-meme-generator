const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');

function insertMemeText(event) {
  const text = textInput.value;
  memeText.innerText = text;
}

function insertMemeImage(event) {
  // Reference: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  const image = URL.createObjectURL(event.target.files[0]);
  memeImage.style.backgroundImage = `url('${image}')`;
}

function setMemeInsertEvents() {
  memeInsert.addEventListener('change', insertMemeImage);
}

function setTextInputEvents() {
  textInput.addEventListener('keyup', insertMemeText);
}

window.onload = function () {
  setMemeInsertEvents();
  setTextInputEvents();
}
