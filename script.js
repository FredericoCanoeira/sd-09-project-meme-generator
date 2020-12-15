function createInput() {
  const input = document.createElement('input');
  input.type = 'text';
  const inputForm = document.querySelector('#text-input');
  inputForm.appendChild(input);
}
createInput();

function createContainerImg() {
  const img = document.createElement('img');
  img.src = '';
  const imageContainer = document.querySelector('#meme-image-container');
  imageContainer.appendChild(img);

  const input = document.querySelector('#text-input input');
  input.addEventListener('input', function () {
    const p = document.createElement('p');
    p.id = 'meme-text';
    imageContainer.appendChild(p);
  });
}
createContainerImg();
