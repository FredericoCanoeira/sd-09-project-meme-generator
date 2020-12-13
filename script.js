function changeMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
}

function changeMemeImg(event) {
  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.background = `url(${event.target.value})`;
}

function addListerners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', changeMemeText);
  const imgFile = document.querySelector('#meme-insert');
  imgFile.addEventListener('input', changeMemeImg);
}

function addStyles() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.width = '300px';
  memeImgContainer.style.height = '300px';
  memeImgContainer.style.border = '1px black solid';
  memeImgContainer.style.backgroundColor = 'white';
  memeImgContainer.style.marginTop = '15px';

  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.width = '100%';
  memeImgDiv.style.height = '100%';
  memeImgDiv.style.backgroundRepeat = 'no-repeat';
  memeImgDiv.style.backgroundSize = '100% 100%';

  const memeText = document.querySelector('#meme-text');
  memeText.style.top = '70%';
  memeText.style.position = 'relative';
  memeText.style.width = '90%';
  memeText.style.height = '2.5em';
  memeText.style.wordBreak = 'break-all';
  memeText.style.overflow = 'hidden';
  memeText.style.margin = 0;
  memeText.style.textShadow = '5px 5px 5px black';
  memeText.style.fontSize = '30px';
  memeText.style.color = 'white';

  const textInput = document.querySelector('#text-input');
  textInput.maxLength = '60';
}

function localTestFunction() {
  const memeImgDiv = document.querySelector('#meme-image');
  const imgPath = 'url(https://image.shutterstock.com/image-vector/trendy-gradient-liquid-background-lines-260nw-1375011146.jpg)';
  memeImgDiv.style.backgroundImage = imgPath;
}

window.onload = function () {
  addListerners();
  addStyles();
  // localTestFunction();
};
