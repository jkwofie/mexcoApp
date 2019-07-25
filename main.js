window.onload=function () {

     var x = document.getElementById('menu');
     x.onclick = function () {
     	var click = document.getElementById('nav'); 
     	if(click.style.display==="block"){
     		click.style.display="none";
     	}
     	else{
     	  click.style.display="block";
     	}
     	
     }
 
}