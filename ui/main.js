var button = document.getElementById('counter');
button.onclick = function(){
    //create requenst
    var request = new XMLHttpRequest();
    //capture the request
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){ 
            //XMLHttpRequest.DONE-->request is completed
            if(request.status === 200){//check request is fully completed
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //make the request
    request.open('GET','http://ajajay271.imad.hasura-app.io/counter',true);
    request.send(null);
};
var nameinput = document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submitbtn');
submit.onclick=function(){
     var names = ['name1', 'name2', 'name3', 'name4'];
     var list = '';
     for(var i=0 ; i<names.length; i++){
         list += '<li>'+ names[i] + '</li>';
     }
     var ul = document.getElementById('namelist');
     ul.innerHTML=list;
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
