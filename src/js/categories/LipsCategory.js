// Importar la configuración y el controlador de categorías desde los módulos correspondientes
import { config } from "../config/index.config.js";
import { categoryHandler } from "../handler/categoryHandler.js";

// Función asincrónica para dibujar la sección de categorías para los labios
export const drawTheLipsCategory = async () => {
    // Llamar al controlador de categorías con los parámetros necesarios para la sección de labios
    categoryHandler({
        name: 'Labios', // Nombre de la categoría de labios
        nameProducts: 'Labiales', // Nombre del primer tipo de producto (Labiales)
        secondNameProduct: 'Delineador de labios', // Nombre del segundo tipo de producto (Delineador de labios)
        description: 'Descubre nuestra colección de labiales, brillos, delineadores y cuidado labial para lucir unos labios irresistibles en todo momento.', // Descripción de la categoría de labios
        category: 'lipstick', // Categoría del primer tipo de producto (Labiales)
        secondCategory: 'lip_liner', // Categoría del segundo tipo de producto (Delineador de labios)
        target: config.containerCard, // Contenedor de tarjetas para el primer tipo de producto (Labiales)
        secondTarget: config.secondContainerCard, // Contenedor de tarjetas para el segundo tipo de producto (Delineador de labios)
    });
} 
