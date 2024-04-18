import { config } from "../config/index.config.js";
import { updateCartItemCount } from "./updateCartItemCount.js";

export const addProductToTheCart = (e) => {
    if (e.target.id === 'add-product-cart') {
        let idProduct = e.target.attributes[1].nodeValue;
        // Buscar el producto en la lista de productos
        const productToAdd = config.productList.find(item => item.id == idProduct);
        if (productToAdd) {
            // Obtener el carrito actual del localStorage o inicializarlo como un array vacío
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            // Agregar el producto al carrito
            // const cartData = [...cart,productToAdd];
            cart.push(productToAdd);
            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Actualizar el número en el carrito en el botón
            updateCartItemCount();

        }
    }
};

