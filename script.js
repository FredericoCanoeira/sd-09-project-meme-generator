const input = document.querySelector('#text-input');
input.setAttribute('maxLength', 60);
const memeContainer = document.querySelector('#meme-image-container');
memeContainer.style.border = '1px solid black';
const memeText = document.querySelector('#meme-text');
const memeImages = document.querySelector('#meme-image');
const inputFile = document.querySelector('#meme-insert');
const buttons = document.querySelector('#buttons');

function memePhrase() {
  input.addEventListener('input', function () {
    memeText.innerHTML = input.value;
  });
}
memePhrase();

// SOURCE:
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
function memeImage() {
  inputFile.addEventListener('change', function (event) {
    memeImages.src = URL.createObjectURL(event.target.files[0]);
  });
}
memeImage();

function backgroundImage() {
  const getImage = document.querySelector('.meme-image').src;
  const img = `url(${getImage})`;
  memeContainer.style.backgroundImage = img;
}
backgroundImage();

function firetBorderButton() {
  const fire = document.createElement('button');
  fire.id = 'fire';
  fire.innerHTML = 'Fire';
  fire.style.backgroundColor = 'red';
  fire.style.color = 'white';
  buttons.appendChild(fire);
  fire.addEventListener('click', function () {
    memeContainer.style.border = '3px dashed red'
  });
}
firetBorderButton();

function waterBorderButton() {
  const water = document.createElement('button');
  water.id = 'water';
  water.innerHTML = 'Water';
  water.style.backgroundColor = 'blue';
  water.style.color = 'white';
  buttons.appendChild(water);
  water.addEventListener('click', function () {
    memeContainer.style.border = '5px double blue';
  });
}
waterBorderButton();

function earthBorderButton() {
  const earth = document.createElement('button');
  earth.id = 'earth';
  earth.innerHTML = 'Earth';
  earth.style.backgroundColor = 'green';
  earth.style.color = 'white';
  buttons.appendChild(earth);
  earth.addEventListener('click', function () {
    memeContainer.style.border = '6px groove green';
  });
}
earthBorderButton();
