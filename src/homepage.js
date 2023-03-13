import Photo from '../photo.jpeg';
//function to clear the current contents of the page and load the home page
export default function(){
const pageContainer = document.querySelector('.container');
pageContainer.innerHTML = '';
pageContainer.classList.remove();
pageContainer.classList.add('home');

const myPhoto = new Image();
myPhoto.src = Photo;
pageContainer.appendChild(myPhoto)

}

