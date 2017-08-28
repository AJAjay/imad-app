console.log('Loaded!');

//SOME java script

var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//some code for image
var img = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};