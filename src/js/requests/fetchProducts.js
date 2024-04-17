import { config } from "../config/index.config.js";

export let productList;


export const fetchProducts = async ({category,quantity})=>{
    const res = await fetch(`${config.urlFetch}?product_type=${category || ''}`);
    const data = await res.json();

    productList=data;
    
    config.quantityProducts.innerHTML = data.length;
    const products = data.slice(config.loadedProductsCount, config.loadedProductsCount + quantity); // Obtener los siguientes 10 productos
    config.loadedProductsCount += products.length; // Actualizar el contador de productos cargados
    return products;
};


