export default function(){
    const pageContainer = document.querySelector('.container');
    pageContainer.innerHTML = '';
    pageContainer.classList.remove();
    pageContainer.classList.add('about');
    pageContainer.innerHTML = `<h1>About Us<h1></br><p>Welcome to our about us page</br>The thing is, there\'s nothing about us!</p>`;
}