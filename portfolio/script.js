
window.onload = function(){ 

var menu = document.querySelector('#menu-bars');
var header = document.querySelector('header');

menu.onclick = ToogleHeader;


function ToogleHeader() {
  	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}

};



