// Importar las funciones necesarias desde sus respectivos archivos
import { displayMenu, closeMenu } from './menu/displayMenu.js';
import { cardSession } from './cardSession.js';
import { displayShoppingCart } from './cart/shoppingCart.js';
import { productCategory } from './categories/indexCategories.js';
import { productSelection } from './cart/ProductSelection.js';
import { closeProductInformationCard } from './cart/closeProductInformationCard.js';
import { addProductToTheCart } from './cart/addProductToTheCart.js';
import { clearShoppingCart } from './cart/clearShoppingCart.js';
import { updateCartItemCount } from './cart/updateCartItemCount.js';

// Agregar event listeners a las ventanas para diferentes acciones
window.addEventListener('DOMContentLoaded',updateCartItemCount,false);
window.addEventListener('click', displayMenu, false); // Escucha los clics para mostrar el menú
window.addEventListener('click', closeMenu, false); // Escucha los clics para cerrar el menú
window.addEventListener('click', productCategory, false); // Escucha los clics para cambiar la categoría de productos
window.addEventListener('click', cardSession, false); // Escucha los clics para manejar la sesión de inicio de sesión/cierre de sesión
window.addEventListener('click', displayShoppingCart, false); // Escucha los clics para mostrar el carrito de compras
window.addEventListener('click', productSelection, false); // Escucha los clics para seleccionar un producto en el carrito
window.addEventListener('click', closeProductInformationCard,false ); //Cerrar la card del producto seleccionado
window.addEventListener('click', addProductToTheCart, false); // Agregar producto al carrito
window.addEventListener('click', clearShoppingCart,false) // Elimina todos los productos del carrito de compras