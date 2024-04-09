const shoppingCart = document.getElementById('cart');
const menuItems = document.getElementById('menu-items');
const inputElement = document.getElementById('container-menu').querySelector('input[type="checkbox"]');
export const displayShoppingCart = (e) =>{
    if(e.target.id == 'openShoppingCart' || e.target.id == 'closeShoppingCart') {
        
        if(e.target.id == 'openShoppingCart'){
            if(!menuItems.classList.add('hidden')){
                menuItems.classList.add('hidden');
            }
            if (inputElement.checked) {
                inputElement.checked = false;
            }
            if(shoppingCart.classList.contains('hidden')){
                shoppingCart.classList.remove('hidden')
            };
        }
        if(e.target.id == "closeShoppingCart"){
            shoppingCart.classList.add('hidden');
        }
    };
};




