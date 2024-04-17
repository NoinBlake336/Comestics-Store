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

    // Limitar la cantidad de productos devueltos a 'quantity'
    const products = newData.slice(0, quantity);
    
    return products;
};



export const fetchRecommendationsProducts = async (quantity) => {
    try {
        const res = await fetch(config.urlFetch);
        if (!res.ok) {
            throw new Error('Failed to fetch recommendations');
        }
        const data = await res.json();
        

        // Obtiene los siguientes productos según la cantidad especificada
        const products = data.slice(config.loadedProductsCount, config.loadedProductsCount + quantity);

        

        return products;
    } catch (error) {
        console.error('Error fetching recommendations:', error.message);
        return [];
    }
};




