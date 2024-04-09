const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

const quantityProducts = document.getElementById('quantity-products');

let loadedProductsCount = 0;

export const fetchProducts = async (category,quantity)=>{
    const res = await fetch(`${URL}?product_type=${category}`);
    const data = await res.json();
    quantityProducts.innerHTML = data.length;
    const products = data.slice(loadedProductsCount, loadedProductsCount + quantity); // Obtener los siguientes 10 productos
    loadedProductsCount += products.length; // Actualizar el contador de productos cargados
    return products;
};


