// Selectors | Seletores

const textInput = document.querySelector('#text-input');
const fileInput = document.querySelector('#meme-insert');
const textImage = document.querySelector('#meme-text');


// Functions | Funções

function insertTextImage() {
  const text = textInput.value;
  textImage.innerText = text;
}

// Event Listeners | Eventos

textInput.addEventListener('input', insertTextImage);
