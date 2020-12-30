const inputContainer = document.getElementById('input-container');
const memeContainer = document.getElementById('meme-image-container');

const generateInputTextElement = function () {
  const labelElement = document.createElement('label');
  labelElement.for = 'text';
  labelElement.innerText = 'Texto';
  const inputTextElement = document.createElement('input');
  inputTextElement.name = 'text';
  inputTextElement.id = 'text-input';
  inputContainer.appendChild(labelElement);
  inputContainer.appendChild(inputTextElement);
};

const generateMemeImage = function () {
  const imgElement = document.createElement('img');
  imgElement.src = ' ';
  memeContainer.appendChild(imgElement);
}

const generateMemeText = function () {
  const pElement = document.createElement('p');
  pElement.id = 'meme-text';
  memeContainer.appendChild(pElement);
}

window.onload = function () {
  generateInputTextElement();
  generateMemeImage();
  generateMemeText();
};
