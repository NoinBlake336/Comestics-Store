// Importar las funciones necesarias desde sus respectivos archivos
import { displayMenu, closeMenu } from './menu/displayMenu.js';
import { cardSession } from './cardSession.js';
import { displayShoppingCart } from './shoppingCart.js';
import { productCategory } from './categories/indexCategories.js';
import { productSelection } from './cart/ProductSelection.js';
import { config } from './config/index.config.js';
import { closeProductInformationCard } from './cart/closeProductInformationCard.js';

// Agregar event listeners a las ventanas para diferentes acciones
window.addEventListener('click', displayMenu, false); // Escucha los clics para mostrar el menú
window.addEventListener('click', closeMenu, false); // Escucha los clics para cerrar el menú
window.addEventListener('click', productCategory, false); // Escucha los clics para cambiar la categoría de productos
window.addEventListener('click', cardSession, false); // Escucha los clics para manejar la sesión de inicio de sesión/cierre de sesión
window.addEventListener('click', displayShoppingCart, false); // Escucha los clics para mostrar el carrito de compras
window.addEventListener('click', productSelection, false); // Escucha los clics para seleccionar un producto en el carrito
window.addEventListener('click', closeProductInformationCard,false );