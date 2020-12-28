function writeText() {
  const textInput = document.querySelector('#text-input');
  const paragraphText = document.querySelector('#meme-text');
  textInput.addEventListener('input', function (event) {
    paragraphText.innerText = event.target.value
  });
}

function uploadImage () {
  const imageInput = document.querySelector('#meme-insert');
  const imageUp = document.querySelector('#meme-image');
  imageInput.addEventListener('change', function (event) {    
    imageUp.src = URL.createObjectURL(event.target.files[0]);
  });
}





uploadImage()
writeText()
