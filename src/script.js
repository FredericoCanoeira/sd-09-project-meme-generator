window.onload = windowLoad()

function listenToTextInput() {
  const textInput = document.querySelector('#text-input')
  const memeText = document.querySelector('#meme-text')

  textInput.addEventListener('keyup', () => {
      memeText.innerText = textInput.value
  })
}

function listenToCustomButtons() {
  const customButtonsNodeList = document.querySelectorAll('#custom-buttons button')
  const memeImageContainer = document.querySelector('#meme-image-container')

  customButtonsNodeList[0].addEventListener('click', () => {
    memeImageContainer.style.border = '5px double red'
  })

  customButtonsNodeList[1].addEventListener('click', () => {
    memeImageContainer.style.border = '5px ridge blue'
  })

  customButtonsNodeList[2].addEventListener('click', () => {
    memeImageContainer.style.border = '5px dashed green'
  })
}

function windowLoad() {
  listenToTextInput()
  listenToCustomButtons()
}