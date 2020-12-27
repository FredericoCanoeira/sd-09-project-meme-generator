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

  const inputImage = document.createElement('input');
  inputImage.id = 'meme-image';
  inputImage.type = 'file', accept="image/*";
  apend.appendChild(inputImage);

  const imageContainer = document.createElement('div');
  imageContainer.id = 'meme-insert';
  apend.appendChild(imageContainer);  

  const img = document.createElement('img');
  img.id = 'output';
  img.src = '';
  document.getElementById('meme-insert').appendChild(img);  
}

function inputText () {
  const textInputed = document.getElementById('text-input');
  let textContainer = document.getElementById('meme-text');
  if(textInputed.value !== '') {
    textContainer.innerText = textInputed.value;
  }
}

function loadFile(event) {  
  let output = document.getElementById('output');
  if(output !== '') {
    output.src = URL.createObjectURL(event.target.files[0]);
  } else {
    output.onload = function() {
      URL.revokeObjectURL(output.src);
    }
  }
}

function listeners () {
  const textContainer = document.getElementById('text-input');
  textContainer.addEventListener('keyup', inputText);
  const teste = document.getElementById('meme-image');
  teste.addEventListener('change', loadFile)
}

window.onload = function() {
  createStructure();
  listeners ();
  inputText();  
}
