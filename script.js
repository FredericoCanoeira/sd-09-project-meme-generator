function addText() {
    let textInput = document.querySelector('#text-input');
    let textBox = document.querySelector('#meme-text');

    textInput.addEventListener('input', () => {
        textBox.innerHTML = textInput.value;
    })
}

addText();

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
  };