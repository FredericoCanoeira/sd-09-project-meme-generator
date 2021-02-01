function inserirTextoMeme () {
  let textInput = document.querySelector ('#text-input');
  textInput.addEventListener('input', function () {
      let memeText = document.querySelector ('#meme-text');
      memeText.innerText = textInput.value;
  })
}

inserirTextoMeme ();