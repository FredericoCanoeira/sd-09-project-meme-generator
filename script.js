function changeMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
}

function changeMemeImg(event) {
  const memeImgContainer = document.querySelector('#meme-image-container');
  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.background = `url(${event.target.value})`;
}

function addListerners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', changeMemeText);
  const imgFile = document.querySelector('#meme-insert')
  imgFile.addEventListener('input', changeMemeImg);
}

function changeElementsStyle() {
  const memeText = document.querySelector('#meme-text');
  memeText.style.top = '70%';
  memeText.style.position = 'relative';
  memeText.style.width = '90%';
  memeText.style.height = '40px';
  memeText.style.wordBreak = 'break-all';
  memeText.style.overflow = 'hidden';

  const memeImgContainer = document.querySelector('#meme-image-container');
  memeImgContainer.style.width = '200px';
  memeImgContainer.style.height = '200px';

  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.style.backgroundRepeat = 'no-repeat';
  memeImgDiv.style.backgroundSize = '100% 100%';
  memeImgDiv.style.width = '100%';
  memeImgDiv.style.height = '100%';
}

function localTestFunction() {
  const imgPath = 'url(https://image.shutterstock.com/image-vector/trendy-gradient-liquid-background-lines-260nw-1375011146.jpg)';
  memeImgDiv.style.backgroundImage = imgPath;
}

window.onload = function () {
  addListerners();
  changeElementsStyle();
  // localTestFunction();
};
