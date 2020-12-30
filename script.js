const inputContainer = document.getElementById('input-container');
const memeContainer = document.getElementById('meme-image-container');

function handleUpdateValue(event) {
  const text = document.getElementById('meme-text');
  text.innerText = event.target.value;
}

const generateInputText = function () {
  const labelElement = document.createElement('label');
  labelElement.for = 'text-input';
  labelElement.innerText = 'Texto:';
  const inputTextElement = document.createElement('input');
  //inputTextElement.name = 'text-input';
  inputTextElement.id = 'text-input';
  inputTextElement.addEventListener('input', handleUpdateValue);
  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputTextElement);
};

function handleFileSelected(event) {
  const file = event.target.files;
  const img = document.getElementById('meme-image');
  img.src = window.URL.createObjectURL(file[0]);
}

const generateInputFile = function () {
  const labelElement = document.createElement('label');
  labelElement.for = 'meme-insert';
  labelElement.innerText = 'Foto:'
  const inputFileElement = document.createElement('input');
  inputFileElement.type = 'file';
  inputFileElement.id = 'meme-insert';
  inputFileElement.addEventListener('change', handleFileSelected);
  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputFileElement);
}

const generateMemeImage = function () {
  const imgElement = document.createElement('img');
  //imgElement.src = 'img/';
  imgElement.id = 'meme-image';
  memeContainer.appendChild(imgElement);
};

const generateMemeText = function () {
  const pElement = document.createElement('p');
  pElement.id = 'meme-text';
  memeContainer.appendChild(pElement);
};

window.onload = function () {
  generateInputText();
  generateMemeImage();
  generateMemeText();
  generateInputFile();
};
