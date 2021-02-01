function inserirTextoMeme () {
  let textInput = document.querySelector ('#text-input');
  textInput.addEventListener('input', function () {
    let memeText = document.querySelector ('#meme-text');
    memeText.innerText = textInput.value;
  })
}

function inserirImagemMeme () {
  let memeInsert = document.querySelector ('#meme-insert');
  memeInsert.addEventListener('change', function () {
      let memeImage = document.querySelector ('#meme-image');
      console.log(memeInsert.files[0]);
  })
}

inserirTextoMeme ();
inserirImagemMeme ();