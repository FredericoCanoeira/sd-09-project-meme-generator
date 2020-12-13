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

function changeElementsStyle() {
  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.width = '200px';
  memeImgContainer.style.height = '200px';
  // memeImgContainer.style.border = '1px black solid';
  memeImgContainer.style.backgroundColor = 'white';

  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.backgroundRepeat = 'no-repeat';
  memeImgDiv.style.backgroundSize = '100% 100%';
  memeImgDiv.style.width = '100%';
  memeImgDiv.style.height = '100%';
  memeImgDiv.style.border = '1px black solid';


  const memeText = document.querySelector('#meme-text');
  memeText.style.top = '70%';
  memeText.style.position = 'relative';
  memeText.style.width = '90%';
  memeText.style.height = '40px';
  memeText.style.wordBreak = 'break-all';
  memeText.style.overflow = 'hidden';
}

function localTestFunction() {
  const memeImgDiv = document.querySelector('#meme-image');
  const imgPath = 'url(https://image.shutterstock.com/image-vector/trendy-gradient-liquid-background-lines-260nw-1375011146.jpg)';
  memeImgDiv.style.backgroundImage = imgPath;
}

window.onload = function () {
  addListerners();
  changeElementsStyle();
  // localTestFunction();
};
