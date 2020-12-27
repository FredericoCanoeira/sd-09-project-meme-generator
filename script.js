function createStructure () {
  const apend = document.getElementById('meme-image-container');
  
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Meme Generator'
  apend.appendChild(createTitle);

  const createInput = document.createElement('input');
  createInput.id = 'text-input';
  createInput.type = 'text';
  createInput.maxLength = 60
  apend.appendChild(createInput);

  const memeText = document.createElement('p');
  memeText.id = 'meme-text';
  apend.appendChild(memeText);

  const inputImage = document.createElement('input');
  inputImage.id = 'meme-insert';
  inputImage.type = 'file', accept="image/*";
  apend.appendChild(inputImage);

  const imageContainer = document.createElement('div');
  imageContainer.id = 'meme-image';
  apend.appendChild(imageContainer);

  const img = document.createElement('img');
  img.id = 'output';
  img.src = '';
  document.getElementById('meme-image').appendChild(img);

  const buttonSection = document.createElement('section');
  buttonSection.id = 'allButtons';
  document.body.appendChild(buttonSection);

  const buttonFire = document.createElement('button');
  buttonFire.id = 'fire';
  document.getElementById('allButtons').appendChild(buttonFire);

  const buttonWater = document.createElement('button');
  buttonWater.id = 'water';
  document.getElementById('allButtons').appendChild(buttonWater);

  const buttonEarth = document.createElement('button');
  buttonEarth.id = 'earth';
  document.getElementById('allButtons').appendChild(buttonEarth);
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
  const teste = document.getElementById('meme-insert');
  teste.addEventListener('change', loadFile)
}

window.onload = function() {
  createStructure();
  listeners ();
  inputText();  
}
