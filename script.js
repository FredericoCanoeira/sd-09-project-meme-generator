document.querySelector('#text-input').addEventListener('keyup',function(self){
    document.querySelector('#meme-text').innerText = self.target.value;
})