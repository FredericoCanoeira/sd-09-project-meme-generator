function showText(){
    let text = document.getElementById('text-input');
    text.addEventListener('input', function(){
        document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
    });
}

showText();