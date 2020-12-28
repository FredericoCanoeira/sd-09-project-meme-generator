function writeText() {
  const textInput = document.querySelector('#text-input');
  const paragraphText = document.querySelector('#meme-text');
  textInput.addEventListener('input', function (event) {
    paragraphText.innerText = event.target.value
  });
}

writeText()
