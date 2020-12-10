function generateTextInputBox() {
  const container = document.getElementById('inputs');
  const textBox = document.createElement('input');
  textBox.type = 'text';
  textBox.id = 'text-input';
  textBox.className = 'text-input';
  textBox.placeholder = 'Type your meme text here';

  container.appendChild(textBox);
  textBox.addEventListener('input', function () {
    const memeText = document.getElementById('meme-text');
    memeText.innerText = textBox.value;
  });
}

function generateMemeText() {
  const container = document.getElementById('meme-image-container');
  const memeText = document.createElement('p');
  memeText.id = 'meme-text';
  memeText.className = 'meme-text';

  container.appendChild(memeText);
}

window.onload = function () {
  generateTextInputBox();
  generateMemeText();
};
