let loadFile = function (event) {
  let reader = new FileReader();
  reader.onload = function () {
    let image = document.getElementById('meme-image');
    image.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

function getTextInput () {
  const input = document.getElementById('text-input');
  const output = document.getElementById('meme-text');
  input.addEventListener('change', function () {
    output.innerText = input.value;
  });
}

window.onload = function () {
  getTextInput();
}
