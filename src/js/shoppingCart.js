import { config } from "./config/index.config.js";


export const displayShoppingCart = (e) =>{
    if(e.target.id == 'openShoppingCart' || e.target.id == 'closeShoppingCart') {
        
        if(e.target.id == 'openShoppingCart'){
            if(!config.menuItems.classList.add('hidden')){
                config.menuItems.classList.add('hidden');
            }
            if (config.inputElement.checked) {
                config.inputElement.checked = false;
            }
            if(config.shoppingCart.classList.contains('hidden')){
                config.shoppingCart.classList.remove('hidden')
            };
        }
        if(e.target.id == "closeShoppingCart"){
            config.shoppingCart.classList.add('hidden');
        }
    };
};




