import { drawingProductsInformations } from "../drawingCard/drawingProductsInformations.js";
import { config } from "../config/index.config.js";

// Función para seleccionar un producto y mostrar sus detalles
export const productSelection = async (e) => {
    try {
        const idProduct = parseInt(e.target.id); // Obtener el ID del producto haciendo clic en un elemento del DOM
        if (!isNaN(idProduct)) { // Verificar si el ID obtenido es un número válido
            // Verificar si productList es un array
            if (Array.isArray(config.productList)) {
                // Iterar sobre la lista de productos para encontrar el producto con el ID correspondiente
                config.productList.forEach(item => {
                    if (item.id === idProduct) { // Verificar si el ID del producto coincide con el ID obtenido
                        // Mostrar card de informacion
                        
                        if(config.productInformationCard.classList.contains('hidden')){
                            config.productInformationCard.classList.remove('hidden');
                        }
                        config.productInformationCard.innerHTML = drawingProductsInformations(item); // Dibujar la card de informacion del producto.

                        
                    }
                });
            }
        }
    } catch (error) {
        console.error("Error al seleccionar el producto:", error); // Capturar y manejar cualquier error que ocurra durante la selección del producto
    }
};
