console.log('Loaded!');
//now , i'm making change using javascript
var element = document.getElementById('main-text');
element.innerHTML = "Value By Javascript"

//move the image 
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft = 10;
    img.style.marginLeft = marginLeft = 'px'
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
   
};