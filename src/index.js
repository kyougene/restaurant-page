const page = document.getElementById('content');

//buttons for toggling through the menu homepage and about 
const homeButton = document.createElement('button');
const aboutButton = document.createElement('button');
const menuButton = document.createElement('button');

//setting a class to the buttons for css styling
homeButton.setAttribute('class', 'button');
aboutButton.setAttribute('class', 'button');
menuButton.setAttribute('class', 'button');

//appending buttons to the content div
page.appendChild(homeButton);
page.appendChild(aboutButton);
page.appendChild(menuButton);

//div container for the pages 
const pageContainer = document.createElement('div');
pageContainer.setAttribute('class', 'container')
page.appendChild(pageContainer);


