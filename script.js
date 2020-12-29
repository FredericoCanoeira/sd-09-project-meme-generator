function createStructure () {
  const apend = document.getElementById('meme-image-container');
  
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Meme Generator';
  apend.appendChild(createTitle);

  const createInput = document.createElement('input');
  createInput.id = 'text-input';
  createInput.type = 'text';
  createInput.maxLength = 60;
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

  const buttonMemesSection = document.createElement('section');
  buttonMemesSection.id = 'allMemes';
  document.body.appendChild(buttonMemesSection);

  const buttonBorderSection = document.createElement('section');
  buttonBorderSection.id = 'allBorderButtons';
  document.body.appendChild(buttonBorderSection);

  const buttonFire = document.createElement('button');
  buttonFire.id = 'fire';
  buttonFire.innerHTML = 'Set Fire';
  buttonFire.style.backgroundColor = 'red';
  document.getElementById('allBorderButtons').appendChild(buttonFire);

  const buttonWater = document.createElement('button');
  buttonWater.id = 'water';
  buttonWater.innerHTML = 'Float in Water';
  buttonWater.style.backgroundColor = 'blue';
  document.getElementById('allBorderButtons').appendChild(buttonWater);

  const buttonEarth = document.createElement('button');
  buttonEarth.id = 'earth';
  buttonEarth.innerHTML = 'Feel the Nature';
  buttonEarth.style.backgroundColor = 'green';
  document.getElementById('allBorderButtons').appendChild(buttonEarth);

  const sectionText = document.createElement('p');
  sectionText.className = 'elements';
  sectionText.innerHTML = 'Choose your Element';
  document.getElementById('allBorderButtons').appendChild(sectionText);

  const buttonMeme1 = document.createElement('button');
  buttonMeme1.id = 'meme-1';
  buttonMeme1.className = 'meme-1';
  document.getElementById('allMemes').appendChild(buttonMeme1);

  const buttonMeme2 = document.createElement('button');
  buttonMeme2.id = 'meme-2';
  buttonMeme2.className = 'meme-2';
  document.getElementById('allMemes').appendChild(buttonMeme2);

  const buttonMeme3 = document.createElement('button');
  buttonMeme3.id = 'meme-3';
  buttonMeme3.className = 'meme-3';
  document.getElementById('allMemes').appendChild(buttonMeme3);

  const buttonMeme4 = document.createElement('button');
  buttonMeme4.id = 'meme-4';
  buttonMeme4.className = 'meme-4';
  document.getElementById('allMemes').appendChild(buttonMeme4);
}

function inputText() {
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

function setMeme1() {
  let loadMeme1 = document.getElementById('output');  
  loadMeme1.src = new URL('http://127.0.0.1:5500/salt.png');
}

function setMeme2() {
  let loadMeme1 = document.getElementById('output');  
  loadMeme1.src = new URL('http://127.0.0.1:5500/math.png');
}

function setMeme3() {
  let loadMeme1 = document.getElementById('output');  
  loadMeme1.src = new URL('http://127.0.0.1:5500/smart.png');
}

function setMeme4() {
  let loadMeme1 = document.getElementById('output');  
  loadMeme1.src = new URL('http://127.0.0.1:5500/jesus.png');
}

function playFire() {
  let fire = document.getElementById('playFireBG');
  let water = document.getElementById('playWaterBG');
  let earth = document.getElementById('playEarthBG');
  if (fire.style.display === "block") {
    fire.style.display = "none";
    water.style.display = "none";
    earth.style.display = "none";
  } else {
    fire.style.display = "block";
    water.style.display = "none";
    earth.style.display = "none";
  }
  fire.play();
}

function playWater() {
  let fire = document.getElementById('playFireBG');
  let water = document.getElementById('playWaterBG');
  let earth = document.getElementById('playEarthBG');
  if (water.style.display === "block") {
    fire.style.display = "none";
    water.style.display = "none";
    earth.style.display = "none";
  } else {
    water.style.display = "block";
    fire.style.display = "none";
    earth.style.display = "none";
  }
  water.play();
}

function playEarth() {
  let fire = document.getElementById('playFireBG');
  let water = document.getElementById('playWaterBG');
  let earth = document.getElementById('playEarthBG');
  if (earth.style.display === "block") {
    fire.style.display = "none";
    water.style.display = "none";
    earth.style.display = "none";
    
  } else {
    earth.style.display = "block";
    water.style.display = "none";
    fire.style.display = "none";
  }
  earth.play();
}

function listeners() {
  const textContainer = document.getElementById('text-input');
  textContainer.addEventListener('keyup', inputText);
  const insertImage = document.getElementById('meme-insert');
  insertImage.addEventListener('change', loadFile);
  const eventButtonFire = document.getElementById('fire');
  eventButtonFire.addEventListener('click', buttonFire);
  eventButtonFire.addEventListener('click', playFire)
  const eventButtonWater = document.getElementById('water');
  eventButtonWater.addEventListener('click', buttonWater);
  eventButtonWater.addEventListener('click', playWater)
  const eventButtonEarth = document.getElementById('earth');
  eventButtonEarth.addEventListener('click', buttonEarth);
  eventButtonEarth.addEventListener('click', playEarth)
  const firstButtonMeme = document.getElementById('meme-1');
  firstButtonMeme.addEventListener('click', setMeme1);
  const secondButtonMeme = document.getElementById('meme-2');
  secondButtonMeme.addEventListener('click', setMeme2);
  const thirdButtonMeme = document.getElementById('meme-3');
  thirdButtonMeme.addEventListener('click', setMeme3);
  const fourthButtonMeme = document.getElementById('meme-4');
  fourthButtonMeme.addEventListener('click', setMeme4);
}

window.onload = function() {
  createStructure();
  listeners ();
  inputText();
};
