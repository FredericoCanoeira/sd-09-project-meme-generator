function createStructure () {
  const apend = document.getElementById('meme-image-container');
  
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Meme Generator'
  apend.appendChild(createTitle);

  const createInput = document.createElement('input');
  createInput.id = 'text-input';
  createInput.type = 'text';
  apend.appendChild(createInput);

  const memeText = document.createElement('p');  
  memeText.id = 'meme-text';
  apend.appendChild(memeText);

  const imageContainer = document.createElement('input');
  imageContainer.id = 'meme-image';
  imageContainer.type = 'file'
  apend.appendChild(imageContainer);
}

function inputText () {
  const textInputed = document.getElementById('text-input');
  let textContainer = document.getElementById('meme-text');
  if(textInputed.value !== '') {
    textContainer.innerText = textInputed.value;
  }
}

function listeners () {
  const textContainer = document.getElementById('text-input');
  textContainer.addEventListener('keyup', inputText);  
}

window.onload = function() {
  createStructure();
  listeners ();
  inputText();
}