var button = document.getElementById('counter');
button.onclick = function(){
    //create requenst
    var request = new XMLHttpRequest();
    //capture the request
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){ //XMLHttpRequest.DONE-->request is completed
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
};
/*var button = document.getElementById('counter');
var counter =0;
button.onclick = function(){
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
console.log('Loaded!');

//SOME java script

//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value';

//some code for image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginLeft+'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
var drop = function(){
  $('.dropdown-toggle').click(function(){
     $('.dropdown-click').toggle(); 
  });  
}
$(document).ready(drop);*/
