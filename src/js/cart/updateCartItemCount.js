

export const updateCartItemCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemCount = cart.length;
    const cartCounter = document.querySelector('#button-cart');
    if (cartCounter) {
        // Modificar las propiedades del elemento #button-cart
        cartCounter.setAttribute('data-item-count', itemCount); // Por ejemplo, puedes usar un atributo personalizado
    }
};