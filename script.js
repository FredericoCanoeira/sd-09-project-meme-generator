function createInputTxt() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'text-input'
  input.placeholder = 'Escreva o meme aqui'
  const inputForm = document.querySelector('#text');
  inputForm.appendChild(input);
}
createInputTxt();

function createContainerTxtImg() {
  const container = document.querySelector('#meme-image-container');
  const inputTxt = document.querySelector('#text-input');

  inputTxt.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (inputTxt.value.length > 0) {
        const p = document.createElement('p');
        p.id = 'meme-text';
        p.innerText = inputTxt.value;
        container.appendChild(p);
      }
    }
  });
}
createContainerTxtImg();

function uploadImage() {
  const container = document.querySelector('#meme-image-container');
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.style.marginTop = '15px'
  container.appendChild(img);

  const inputForm = document.querySelector('#img');
  const inputImg = document.createElement('input');
  inputImg.type = 'file';
  inputImg.id = 'meme-insert';
  inputImg.style.marginTop = '5px';
  inputForm.appendChild(inputImg);

  inputImg.addEventListener('change', function (e) {
    // https://www.youtube.com/watch?v=xqIVrjKhfaU
    if (this.files && this.files[0]) {
      img.src = URL.createObjectURL(this.files[0]);
    }
  });
}
uploadImage();
