const inputBox = document.querySelector('#text-input');
const addTextButton = document.querySelector('#ad-text')
const textMemeDiv = document.querySelector('#meme-text')

function addTextToMeme() {
  addTextButton.addEventListener('click', function() {
    const text = inputBox.value;
    const pMemeText = textMemeDiv.children[0]
    pMemeText.innerHTML = text;
    inputBox.value = '';
  });
}
addTextToMeme()
