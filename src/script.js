window.onload = windowLoad()

function listenToTextInput() {
  const textInput = document.querySelector('#text-input')
  const memeText = document.querySelector('#meme-text')

  textInput.addEventListener('keyup', () => {
      memeText.innerText = textInput.value
  })
}

function windowLoad() {
  listenToTextInput()
}