function changeMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
}

function changeMemeImg(event) {
  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.background = `url(${event.target.value})`;
}

function fireBorder() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.border = '3px dashed red';
}

function waterBorder() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.border = '5px double';
}

function earthBorder() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.border = '6px groove green';
}

function addListerners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', changeMemeText);
  const imgFile = document.querySelector('#meme-insert');
  imgFile.addEventListener('input', changeMemeImg);
  const fireButton = document.querySelector('#fire');
  fireButton.addEventListener('click', fireBorder);
  const waterButton = document.querySelector('#water');
  waterButton.addEventListener('click', waterBorder);
  const earthButton = document.querySelector('#earth');
  earthButton.addEventListener('click', earthBorder);
}

function addStyles() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.width = '300px';
  memeImgContainer.style.height = '300px';
  memeImgContainer.style.border = '1px black solid';
  memeImgContainer.style.backgroundColor = 'white';
  memeImgContainer.style.marginTop = '15px';
  memeImgContainer.style.position = 'relative';

  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.width = '100%';
  memeImgDiv.style.height = '100%';
  memeImgDiv.style.backgroundRepeat = 'no-repeat';
  memeImgDiv.style.backgroundSize = '100% 100%';

  const memeText = document.querySelector('#meme-text');
  memeText.style.bottom = '0';
  memeText.style.position = 'absolute';
  memeText.style.overflow = 'hidden';
  memeText.style.margin = 0;
  memeText.style.textShadow = '5px 5px 5px black';
  memeText.style.fontSize = '30px';
  memeText.style.color = 'white';

  const textInput = document.querySelector('#text-input');
  textInput.maxLength = '60';

  const borderButtons = document.querySelector('#border-buttons');
  borderButtons.style.width = '300px';
  borderButtons.style.textAlign = 'center';
  borderButtons.style.marginTop = '5px';
  borderButtons.style.fontSize = '25px';

  const fireButton = document.querySelector('#fire');
  fireButton.innerText = 'Fire';
  fireButton.style.backgroundColor = 'red';
  fireButton.style.marginRight = '-6px';
  const waterButton = document.querySelector('#water');
  waterButton.innerText = 'Water';
  waterButton.style.backgroundColor = 'blue';
  waterButton.style.marginRight = '-6px';
  const earthButton = document.querySelector('#earth');
  earthButton.innerText = 'Earth';
  earthButton.style.backgroundColor = 'green';
}

function localTestFunction() {
  const memeImgDiv = document.querySelector('#meme-image');
  const imgPath = 'url(https://image.shutterstock.com/image-vector/trendy-gradient-liquid-background-lines-260nw-1375011146.jpg)';
  memeImgDiv.style.backgroundImage = imgPath;
}

window.onload = function () {
  addListerners();
  addStyles();
  localTestFunction();
};
