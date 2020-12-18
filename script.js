function createInputText() {
  const inputFather = document.querySelector('.input-section');
  const inputInsert = document.createElement('input')
  inputInsert.id = 'text-input';
  inputInsert.placeholder = 'Escreva aqui';
  inputInsert.maxLength = '60';
  inputFather.appendChild(inputInsert);
}
createInputText();

function textMeme() {
  const textInput = document.querySelector('#text-input');
  const textImg = document.querySelector('#meme-text')
  if (textInput.value === '') {
    textImg.innerHTML = '';
    return;
  }
  const texto = textInput.value;
  textImg.innerHTML = texto;
}

const localInput = document.querySelector('#text-input');
localInput.addEventListener('keyup', textMeme);

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

const buttonFile = document.querySelector('#meme-insert')
buttonFile.addEventListener('input', createInputImage);
