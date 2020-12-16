function createInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'text-input'
  input.placeholder = 'Escreva o meme aqui'
  const inputForm = document.querySelector('#input-area');
  inputForm.appendChild(input);
}
createInput();

function createContainerImg() {
  const img = document.createElement('img');
  const container = document.querySelector('#meme-image-container');
  container.appendChild(img);
  const input = document.querySelector('#text-input');

  input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (input.value.length > 0) {
        const p = document.createElement('p');
        p.id = 'meme-text';
        p.innerText = input.value;
        container.appendChild(p);
      }
    }
  });
}
createContainerImg();
