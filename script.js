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
  buttonFire.className = 'fire';
  buttonFire.style.backgroundColor = 'red';
  document.getElementById('allButtons').appendChild(buttonFire);

  const buttonWater = document.createElement('button');
  buttonWater.id = 'water';
  buttonWater.className = 'water';
  buttonWater.style.backgroundColor = 'blue';
  document.getElementById('allButtons').appendChild(buttonWater);

  const buttonEarth = document.createElement('button');
  buttonEarth.id = 'earth';
  buttonEarth.className = 'earth';
  buttonEarth.style.backgroundColor = 'green';
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

function buttonFire() {
  const fire = document.getElementById('meme-image-container');  
  if (fire.classList.value.includes('fire')) {
    fire.classList.remove('fire');    
  } else {
    fire.classList.add('fire');
    fire.classList.remove('water', 'earth');
  }
}

function buttonWater() {
  const water = document.getElementById('meme-image-container');  
  if (water.classList.value.includes('water')) {
    water.classList.remove('water');    
  } else {
    water.classList.add('water');
    water.classList.remove('fire', 'earth');
  }
}

function buttonEarth() {
  const earth = document.getElementById('meme-image-container');  
  if (earth.classList.value.includes('earth')) {
    earth.classList.remove('earth');    
  } else {
    earth.classList.add('earth');
    earth.classList.remove('fire', 'water');
  }
}

function listeners () {
  const textContainer = document.getElementById('text-input');
  textContainer.addEventListener('keyup', inputText);
  const insertImage = document.getElementById('meme-insert');
  insertImage.addEventListener('change', loadFile);
  const eventButtonFire = document.getElementById('fire');
  eventButtonFire.addEventListener('click', buttonFire);

  const eventButtonWater = document.getElementById('water');
  eventButtonWater.addEventListener('click', buttonWater);

  const eventButtonEarth = document.getElementById('earth');
  eventButtonEarth.addEventListener('click', buttonEarth);
}

window.onload = function() {
  createStructure();
  listeners ();
  inputText();  
}
