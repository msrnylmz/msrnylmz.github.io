
window.onload = function(){ 

var menu = document.querySelector('#menu-bars');
var header = document.querySelector('header');

menu.onclick = ToogleHeader;


function ToogleHeader() {
  	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}

fetch('items.json')
    .then(response => response.json()) 
    .then(portfolioItems => {
        const container = document.getElementById('portfolioContainer');
        
        portfolioItems.forEach(item => {
            const box = document.createElement('div');
            box.classList.add('box');

            box.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <p class="appNameL">${item.title}</p>
                <div class="icons">
					<a href="${item.url}" target="_blank">
                    	<img src="${item.logo}"  alt="Logo">
					</a>
                </div>
            `;

            container.appendChild(box);
        });
    });
};