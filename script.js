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
