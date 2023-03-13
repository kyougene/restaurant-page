import './styles.css';
const page = document.getElementById('content');

//buttons for toggling through the menu homepage and about 
const homeButton = document.createElement('button');
const aboutButton = document.createElement('button');
const menuButton = document.createElement('button');

const buttonContainer = document.createElement('div')
buttonContainer.setAttribute('class', 'button-container');
page.appendChild(buttonContainer);

//setting a class to the buttons for css styling
homeButton.setAttribute('class', 'button');
aboutButton.setAttribute('class', 'button');
menuButton.setAttribute('class', 'button');

//button text
homeButton.innerText = 'Home';
aboutButton.innerText = 'About';
menuButton.innerText = 'Menu';

//appending buttons to the content div
buttonContainer.appendChild(homeButton);
buttonContainer.appendChild(aboutButton);
buttonContainer.appendChild(menuButton);

//div container for the pages 
const pageContainer = document.createElement('div');
pageContainer.setAttribute('class', 'container')
page.appendChild(pageContainer);


import loadHomePage from './homepage.js'

window.onload = function () {
    loadHomePage();
}

homeButton.addEventListener('click', ()=>{
    loadHomePage();
})

import loadAboutPage from './about.js'

aboutButton.addEventListener('click', ()=>{
    loadAboutPage();
})