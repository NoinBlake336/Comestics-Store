import {displayMenu, closeMenu} from './menu/displayMenu.js';
import { cardSession } from './cardSession.js';
import {displayShoppingCart} from './shoppingCart.js';
import { productCategory } from './categories/indexCategories.js';



window.addEventListener('click', displayMenu, false);
window.addEventListener('click', closeMenu, false);
window.addEventListener('click', productCategory, false);
window.addEventListener('click', cardSession, false);
window.addEventListener('click',displayShoppingCart,false);