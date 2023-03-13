export default function(){
    const pageContainer = document.querySelector('.container');
    pageContainer.innerHTML = '';
    pageContainer.classList.remove();
    pageContainer.classList.add('menu');
    pageContainer.innerHTML = '<h1>Menu</h1><p>Check back in tomorrow for our full menu!</p>'
}