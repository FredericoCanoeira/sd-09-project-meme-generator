function generateMemeText() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', function () {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = textInput.value;
  });
}

function generateMemeImage() {
  const fileInput = document.querySelector('#meme-insert');
  fileInput.addEventListener('change', function (memeImage) {
    const image = document.querySelector('#meme-image');
    image.src = URL.createObjectURL(memeImage.target.files[0]);
  });
}

window.onload = function () {
  generateMemeText();
  generateMemeImage();
};
