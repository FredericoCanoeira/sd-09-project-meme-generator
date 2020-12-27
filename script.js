const inputBox = document.querySelector('#text-input');
const addTextButton = document.querySelector('#ad-text')
const textMeme = document.querySelector('#meme-text')

function addTextToMeme() {
  inputBox.addEventListener('input', function() {
    const text = inputBox.value;
    textMeme.innerHTML = text;
    
  });
}
addTextToMeme()
