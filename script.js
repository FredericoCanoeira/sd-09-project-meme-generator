function createInputText() {
  const inputFather = document.querySelector('.input-section');
  const inputInsert = document.createElement('input');
  inputInsert.id = 'text-input';
  inputInsert.placeholder = 'Escreva aqui';
  inputInsert.maxLength = '60';
  inputInsert.type = 'text';
  inputFather.appendChild(inputInsert);
}
createInputText();

function textMeme() {
  const textInput = document.querySelector('#text-input');
  const textImg = document.querySelector('#meme-text');
  if (textInput.value === '') {
    textImg.innerHTML = '';
    return;
  }
  const texto = textInput.value;
  textImg.innerHTML = texto;
}

const localInput = document.querySelector('#text-input');
localInput.addEventListener('keyup', textMeme);

function createInputButton() {
  const inputFather = document.querySelector('.file-section');
  const inputInsert = document.createElement('input');
  inputInsert.id = 'meme-insert';
  inputInsert.type = 'file';
  inputInsert.accept = 'image/png, image/jpeg';
  inputFather.appendChild(inputInsert);
}
createInputButton();

function createImage() {
  const imageFather = document.querySelector('#meme-image-container');
  const image = document.createElement('img');
  image.id = 'meme-image';
  image.className = 'meme-image';
  imageFather.appendChild(image);
}
createImage();

function createInputImage(origin) {
  const imageInsert = document.querySelector('#meme-image');
  imageInsert.src = URL.createObjectURL(origin.target.files[0]);
}

const buttonFile = document.querySelector('#meme-insert');
buttonFile.addEventListener('input', createInputImage);

function borderFire() {
  const border = document.querySelector('.container');
  border.style.border = '3px dashed red';
}

function borderWater() {
  const border = document.querySelector('.container');
  border.style.border = '5px double blue';
}

function borderEarth() {
  const border = document.querySelector('.container');
  border.style.border = '6px groove green';
}

function createButtons(id, clss, name) {
  const buttonFather = document.querySelector('.buttons-section');
  const button = document.createElement('button');
  button.id = id;
  button.className = clss;
  button.innerText = name;
  buttonFather.appendChild(button);
}

createButtons('fire', 'fire-button', 'Fire');
createButtons('water', 'water-button', 'Water');
createButtons('earth', 'earth-button', 'Earth');

const buttonFire = document.querySelector('#fire-button');
buttonFire.addEventListener('click', borderFire);

const buttonWater = document.querySelector('#water-button');
buttonWater.addEventListener('click', borderWater);

const buttonEarth = document.querySelector('#earth-button');
buttonEarth.addEventListener('click', borderEarth);
