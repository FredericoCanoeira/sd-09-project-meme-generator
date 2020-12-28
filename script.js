function writeText() {
  const textInput = document.querySelector('#text-input');
  const paragraphText = document.querySelector('#meme-text');
  textInput.addEventListener('input', function (event) {
    paragraphText.innerText = event.target.value;
  });
}

function uploadImage() {
  const imageInput = document.querySelector('#meme-insert');
  const imageUp = document.querySelector('#meme-image');
  imageInput.addEventListener('change', function (event) {
    imageUp.src = URL.createObjectURL(event.target.files[0]);
  });
}

function borderChange() {
  const container = document.querySelector('#meme-image-container');
  const buttons = document.querySelectorAll('button');
  buttons[0].addEventListener('click', function () {
    container.style.border = "6px groove green"
  });
  buttons[1].addEventListener('click', function () {
    container.style.border = '3px dashed red';
  });
  buttons[2].addEventListener('click', function () {
    container.style.border = '5px double blue';
  })
}

uploadImage();
writeText();
borderChange();
