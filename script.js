const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value.toUpperCase();
});
textInput.addEventListener('keypress', (tecla) => {
  if (tecla.keyCode === 13) {
    textInput.value = '';
    textInput.focus();
  }
});

memeInsert.addEventListener("change", (event) => {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});
