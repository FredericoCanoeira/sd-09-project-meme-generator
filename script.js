const inputBox = document.querySelector('#text-input');
const addTextButton = document.querySelector('#ad-text');
const textMeme = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const memeContainer = document.querySelector('#meme-image-container');
const waterButton = document.querySelector('#water');
const fireButton = document.querySelector('#fire');
const earthButton = document.querySelector('#earth');

function addTextToMeme() {
  inputBox.addEventListener('input', function() {
    const text = inputBox.value;
    textMeme.innerHTML = text;
  });
}
addTextToMeme();

function addMemeImage() {
  memeInsert.addEventListener('change', function (event) {
    memeImage.src = URL.createObjectURL(event.target.files[0])
  });
}
addMemeImage();

function waterBorder() {
  waterButton.addEventListener('click', function () {
    memeContainer.style.border = 'double  5px blue'
  });
}
waterBorder()

function fireBorder() {
  fireButton.addEventListener('click', function () {
    memeContainer.style.border = 'dashed 3px red'
  });
}
fireBorder()

function earthBorder() {
  earthButton.addEventListener('click', function () {
    memeContainer.style.border = 'groove 6px green'
  });
}
earthBorder()

