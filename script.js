const memeContainer = document.getElementById('meme-image-container');
const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const borderSettings = document.getElementById('border-settings');

function insertMemeText() {
  const text = textInput.value;
  memeText.innerText = text;
}

function insertMemeImage(event) {
  // Reference: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
  const image = URL.createObjectURL(event.target.files[0]);
  memeImage.style.backgroundImage = `url('${image}')`;
}

function changeBorder(event) {
  const eventClassName = event.target.id;
  memeContainer.className = `meme-image-container ${eventClassName}-border`;
  console.log(eventClassName);
}

function setMemeInsertEvents() {
  memeInsert.addEventListener('change', insertMemeImage);
}

function setTextInputEvents() {
  textInput.addEventListener('keyup', insertMemeText);
}

function setBorderSettingsEvents() {
  borderSettings.addEventListener('click', changeBorder);
}

window.onload = function () {
  setMemeInsertEvents();
  setTextInputEvents();
  setBorderSettingsEvents();
};
