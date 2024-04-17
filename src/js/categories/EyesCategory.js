// Importar la configuración y el controlador de categorías desde los módulos correspondientes
import { config } from "../config/index.config.js";
import { categoryHandler } from "../handler/categoryHandler.js";

// Función para dibujar la sección de categorías para los ojos
export const drawTheEyesCategory = () => {
    // Llamar al controlador de categorías con los parámetros necesarios para la sección de ojos
    categoryHandler({
        name: 'Ojos', // Nombre de la categoría de ojos
        description: 'Explora nuestra gama de productos para ojos, desde sombras de ojos y delineadores hasta <br> máscaras de pestañas y cuidado de cejas, para lograr looks deslumbrantes y expresivos.', // Descripción de la categoría de ojos
        nameProducts: 'Cejas', // Nombre del primer tipo de producto (Cejas)
        secondNameProduct: 'Delineador de ojos', // Nombre del segundo tipo de producto (Delineador de ojos)
        category: 'eyebrow', // Categoría del primer tipo de producto (Cejas)
        secondCategory: 'eyeliner', // Categoría del segundo tipo de producto (Delineador de ojos)
        target: config.containerCard, // Contenedor de tarjetas para el primer tipo de producto (Cejas)
        secondTarget: config.secondContainerCard, // Contenedor de tarjetas para el segundo tipo de producto (Delineador de ojos)
    });
};
