import {displayMenu, closeMenu} from './displayMenu.js';
import {productCategory} from './categories.js';
import { cardSession } from './cardSession.js';
import {displayShoppingCart} from './shoppingCart.js';



window.addEventListener('click', displayMenu, false);
window.addEventListener('click', closeMenu, false);
window.addEventListener('click', productCategory, false);
window.addEventListener('click', cardSession, false);
window.addEventListener('click',displayShoppingCart,false);