import { config } from "../config/index.config.js";



const deleteMenuStyles = ()=>{
    const inputElement = config.containerMenu.querySelector('input[type="checkbox"]');
    config.menuItems.classList.add('hidden');
    if (inputElement.checked) {
        inputElement.checked = false;
    }

};



export const displayMenu = (e) => {
    const hamburgerMenu = e.target.attributes[0].nodeValue;
    if (hamburgerMenu != "checkbox") return;
    if (config.menuItems.classList.contains('hidden')) {
        config.menuItems.classList.remove('hidden');
    }
}

export const closeMenu = (e) => {
    const backMenu = e.target.id;
    if(backMenu != 'icon-back') return;
    deleteMenuStyles();
}