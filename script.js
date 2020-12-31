function insertText() {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput.value;
}

function displayMeme() {
  const memeInsert = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');
  // Remove all Child from div if there's any child. Used code at https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  while (memeImage.firstChild) {
    memeImage.removeChild(memeImage.firstChild);
  }
  const img = document.createElement('img');
  img.src = URL.createObjectURL(memeInsert.files[0]);
  img.style.width = '500px';
  img.style.height = '500px';
  memeImage.appendChild(img);
}

function changeBorder(evt) {
  const clickedButtonId = evt.target.id;
  const memeImageContainer = document.querySelector('#meme-image-container');
  switch(clickedButtonId) {
    case 'default-border':
      memeImageContainer.classList.remove('fire', 'earth', 'water');
      memeImageContainer.classList.add('default-border');
      break;
    case 'fire':
      memeImageContainer.classList.remove('default-border', 'earth', 'water');
      memeImageContainer.classList.add('fire');
      break;
    case 'earth':
      memeImageContainer.classList.remove('default-border', 'fire', 'water');
      memeImageContainer.classList.add('earth');
      break;
    case 'water':
      memeImageContainer.classList.remove('default-border', 'fire', 'earth');
      memeImageContainer.classList.add('water');
      break;
    default:
      //do nothing;
  }
}
// calcular a proporção da imagem
// multiplicar o lado maior que tomará o tamanho de 500px pela proporção calculada

window.onload = function () {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', insertText);
  const memeInsert = document.querySelector('#meme-insert');
  memeInsert.addEventListener('change', displayMeme);
  const buttonContainer = document.querySelector('#button-container');
  buttonContainer.addEventListener('click', changeBorder);
};

// limite máximo de caracteres 60: An element with position: absolute; is positioned relative t
