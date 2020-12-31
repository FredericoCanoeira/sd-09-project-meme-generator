let getText = document.querySelector('#input');
let putText = document.querySelector('#meme-text')

function changeText() {
putText.innerText = getText.value;
}

getText.addEventListener('keypress', changeText);
