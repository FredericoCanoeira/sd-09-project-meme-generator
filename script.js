function writeText() {
  const textInput = document.querySelector('#text-input');
  const paragraphText = document.querySelector('#meme-text');
  textInput.addEventListener('input', function (event) {
    paragraphText.innerText = event.target.value;
  });
}

function uploadImage() {
  const imageInput = document.querySelector('#meme-insert');
  const imageUp = document.querySelector('#meme-image');
  imageInput.addEventListener('change', function (event) {
    imageUp.src = URL.createObjectURL(event.target.files[0]);
  });
}

function borderChange() {
  const container = document.querySelector('#meme-image-container');
  const buttons = document.querySelectorAll('button');
  buttons[0].addEventListener('click', function () {
    container.style.border = '6px groove green';
    container.style.backgroundColor = 'rgb(0, 128, 0)';
  });
  buttons[1].addEventListener('click', function () {
    container.style.border = '3px dashed red';
    container.style.backgroundColor = 'rgb(255, 0, 0)';
  });
  buttons[2].addEventListener('click', function () {
    container.style.border = '5px double blue';
    container.style.backgroundColor = 'rgb(0, 0, 255)';
  });
}
/*
function uploadStandardImages() {
  const images = document.querySelector('.memes-images');
  const imageUp = document.querySelector('#meme-image');
  images.children[0].addEventListener('click', function () {
    imageUp.src = images.children[0].src;
  });
  images.children[1].addEventListener('click', function () {
    imageUp.src = images.children[1].src;
  });
  images.children[2].addEventListener('click', function () {
    imageUp.src = images.children[2].src;
  });
  images.children[3].addEventListener('click', function () {
    imageUp.src = images.children[3].src;
  });
}
*/
uploadImage();
writeText();
borderChange();
//uploadStandardImages();
