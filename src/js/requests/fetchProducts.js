import { config } from "../config/index.config.js";

export const fetchProducts = async ({ category, quantity }) => {
    const res = await fetch(`${config.urlFetch}?product_type=${category || ''}`);
    const newData = await res.json();
    const existingData = localStorage.getItem('productList') ? JSON.parse(localStorage.getItem('productList')) : [];

    // Verificar si los datos obtenidos son diferentes a los existentes en el localStorage
    const uniqueData = newData.filter(newItem => !existingData.some(existingItem => existingItem.id === newItem.id));

    // Guardar los datos únicos en el localStorage uno por uno
    uniqueData.forEach(item => {
        localStorage.setItem(`product_${item.id}`, JSON.stringify(item));
    });

    // Actualizar la lista completa de productos en localStorage
    const updatedData = [...existingData, ...uniqueData];
    localStorage.setItem('productList', JSON.stringify(updatedData));

    
    config.quantityProducts.innerHTML = updatedData.length;
    const products = updatedData.slice(config.loadedProductsCount, config.loadedProductsCount + quantity); // Obtener los siguientes 10 productos
    config.loadedProductsCount += products.length; // Actualizar el contador de productos cargados
    return products;
};


export const fetchRecommendationsProducts = async ({quantity}) => {
    const res = await fetch(`${config.urlFetch}`);
    const data = await res.json();

    
    config.quantityProducts.innerHTML = data.length;
    const products = data.slice(config.loadedProductsCount, config.loadedProductsCount + quantity); // Obtener los siguientes 10 productos
    config.loadedProductsCount += products.length; // Actualizar el contador de productos cargados
    return products;
} 



