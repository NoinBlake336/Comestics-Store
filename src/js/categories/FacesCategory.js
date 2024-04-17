// Importar la configuración y el controlador de categorías desde los módulos correspondientes
import { config } from "../config/index.config.js";
import { categoryHandler } from "../handler/categoryHandler.js";

// Función para dibujar la sección de categorías para el rostro
export const drawTheFacesCategory = () => {
    // Llamar al controlador de categorías con los parámetros necesarios para la sección de rostro
    categoryHandler({
        name: 'Rostro', // Nombre de la categoría de rostro
        description: 'Descubre nuestra sección ROSTRO: todo lo que necesitas para una piel impecable y radiante. <br> Encuentra bases, correctores, iluminadores y cuidado de la piel para realzar tu belleza natural.', // Descripción de la categoría de rostro
        nameProducts: 'Rubor', // Nombre del primer tipo de producto (Rubor)
        secondNameProduct: 'Sombra', // Nombre del segundo tipo de producto (Sombra)
        category: 'blush', // Categoría del primer tipo de producto (Rubor)
        secondCategory: 'eyeshadow', // Categoría del segundo tipo de producto (Sombra)
        target: config.containerCard, // Contenedor de tarjetas para el primer tipo de producto (Rubor)
        secondTarget: config.secondContainerCard, // Contenedor de tarjetas para el segundo tipo de producto (Sombra)
    });
};
