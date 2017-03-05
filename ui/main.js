console.log('Loaded!');
//now , i'm making change using javascript
var element = document.getElementById('main-text');
element.innerHTML = "Value By Javascript"

//move the image 
var img = document.getElementById('madi');
img.onclick = function() {
  img.style.marginLeft = '100px';  
};