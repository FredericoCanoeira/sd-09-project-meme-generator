function insertTextEvent() {
  const inputBox = document.querySelector('#text-input');
  inputBox.addEventListener('change', function () {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = inputBox.value;
  });
}

insertTextEvent();

function insertImageEvent () {
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', function () {
    const memeimage = document.querySelector('#meme-image');
    memeimage.src = URL.createObjectURL(inputImage.files[0]);
  });
}

insertImageEvent();
