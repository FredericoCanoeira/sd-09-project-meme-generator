/* Requisito 1 - input com id = text-input;
- elemento de container para imagem e texto gerado a partir do input com id = meme-image-container;
- criar elemento dentro do container para exibir o texto do input, com id = meme-text;
- mostrar o texto mesmo sem imagem gerada;
*/

function addTextToImg() {
  const inputText = document.querySelector('#text-input');
  inputText.addEventListener('input', (event) => {
    const textOutput = document.querySelector('#meme-text');
    textOutput.innerText = event.target.value;
  });
}

addTextToImg();

/* Requisito 2 
- dentro do container deve ter um elemento para receber a imagem com id = meme-image;
- o input de imagem deve ter um id = meme-insert (fora do container);
- a imagem deve ocupar todo o espaço do container;
- o texto inserido deve ficar sobre a imagem;
*/

function addImageToContainer() {
  const myInputImg = document.querySelector('#meme-insert');
  myInputImg.addEventListener('input', (event) => {
    const myImage = document.querySelector('#meme-image');
    myImage.src = URL.createObjectURL(event.target.files[0]);
  });
}

addImageToContainer();
