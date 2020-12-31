let getText = document.querySelector('#text-input');
let putText = document.querySelector('#meme-text')

function changeText() {
putText.innerHTML = getText.value;
}

getText.addEventListener('input', changeText);
