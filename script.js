const input = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');

function showText() {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = input.value;
}
input.addEventListener('input', showText);

function localTestFunction() {
  const memeImgDiv = document.querySelector('#meme-image');
  memeImgDiv.src = 'https://image.shutterstock.com/image-vector/trendy-gradient-liquid-background-lines-260nw-1375011146.jpg';
  console.log(memeImgDiv.src);
}
// localTestFunction();

function uploadImage() {
  const memeImage = document.querySelector('#meme-image');
  // memeImage.style.backgroundImage = URL.createObjectURL(inputImage.value);
  memeImage.style.backgroundImage = `url(${inputImage.value})`;
}
inputImage.addEventListener('input', uploadImage);
