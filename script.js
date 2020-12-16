function addText() {
    let textInput = document.querySelector('#text-input');
    let textBox = document.querySelector('#meme-text');

    textInput.addEventListener('input', () => {
        textBox.innerHTML = textInput.value;
    })
}

addText();