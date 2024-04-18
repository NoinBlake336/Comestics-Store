import { config } from "../config/index.config.js";

export const displayShoppingCart = (e) => {
    if (e.target.id === 'openShoppingCart' || e.target.id === 'closeShoppingCart') {
        if (e.target.id === 'openShoppingCart') {
            // Oculta el menú si está abierto
            if (!config.menuItems.classList.contains('hidden')) {
                config.menuItems.classList.add('hidden');
            }
            // Desmarca el checkbox del menú si está marcado
            if (config.inputElement.checked) {
                config.inputElement.checked = false;
            }
            // Muestra el carrito de compras si está oculto
            if (config.shoppingCart.classList.contains('hidden')) {
                config.shoppingCart.classList.remove('hidden');
                areThereProductsToDisplay();
            }
        }
        if (e.target.id === 'closeShoppingCart') {
            // Oculta el carrito de compras
            config.shoppingCart.classList.add('hidden');
        }
    }
};
