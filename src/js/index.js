const menuItems = document.getElementById('menu-items');
const containerMenu = document.getElementById('container-menu');


const deleteMenuStyles = ()=>{
    const inputElement = containerMenu.querySelector('input[type="checkbox"]');
    menuItems.classList.add('hidden')
    if (inputElement.checked) {
        inputElement.checked = false;
    }

};



const displayMenu = (e) => {
    const hamburgerMenu = e.target.attributes[0].nodeValue;
    if (hamburgerMenu != "checkbox") return;
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
    }
}

const closeMenu = (e) => {
    const backMenu = e.target.id;
    if(backMenu != 'icon-back') return;
    deleteMenuStyles();
}


window.addEventListener('click', displayMenu, false);
window.addEventListener('click', closeMenu, false);