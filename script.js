function insertTextEvent() {
  const inputBox = document.querySelector('#text-input');
  inputBox.addEventListener('change', function () {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = inputBox.value;
  });
}

insertTextEvent();
