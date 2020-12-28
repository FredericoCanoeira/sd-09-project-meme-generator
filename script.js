const inputBox = document.querySelector('#text-input');
const addTextButton = document.querySelector('#ad-text')
const textMeme = document.querySelector('#meme-text')
const memeInsert = document.querySelector('#meme-insert')
const memeImage = document.querySelector('#meme-image')

function addTextToMeme() {
  inputBox.addEventListener('input', function() {
    const text = inputBox.value;
    textMeme.innerHTML = text;
    
  });
}
addTextToMeme()

function addMemeImage() {
  memeInsert.addEventListener('change', function (event) {
    memeImage.src = URL.createObjectURL(event.target.files[0])
  })
}
addMemeImage()