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
// calcular a proporção da imagem para depois multiplicar o lado maior que tomará o tamanho de 500px pela proporção calculada

window.onload = function () {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', insertText);
  const memeInsert = document.querySelector('#meme-insert');
  memeInsert.addEventListener('change', displayMeme);
};

// limite máximo de caracteres 60: An element with position: absolute; is positioned relative t
