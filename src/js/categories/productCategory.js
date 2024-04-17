// Importar funciones y módulos necesarios desde los respectivos archivos
import { hiddenMain } from "../menu/NavFuctions.js"; // Oculta el menú principal
import { informationText } from "../menu/NavFuctions.js"; // Muestra información de texto en el menú
import { fetchProducts } from "../requests/fetchProducts.js"; // Realiza la solicitud para obtener productos
import { skeletonCard, skeletonCardRecommendations } from "../skeleton-loaders/cardSkeleton.js"; // Muestra esqueletos de tarjetas para la carga
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js"; // Oculta los esqueletos de tarjetas
import { config } from "../config/index.config.js"; // Configuración global de la aplicación
import { moveCarouselRecommendations } from "../cart/moveRecommendationCarousel.js"; // Mueve el carrusel de recomendaciones
import { fetchRecommendations } from "../requests/fetchItemsRecommendations.js"; // Realiza la solicitud para obtener recomendaciones
import { renderProducts } from "./writeCard.js/writeProducts.js"; // Renderiza los productos en las tarjetas

// Función asincrónica para dibujar la categoría de productos
export const drawTheProductsCategory = async () => {
    // Ocultar el menú principal
    hiddenMain();
    // Mostrar el esqueleto de las tarjetas de recomendaciones
    skeletonCardRecommendations(config.recommedationsContainer);
    // Realizar la solicitud para obtener las recomendaciones
    fetchRecommendations();
    
    // Mover el carrusel de recomendaciones
    moveCarouselRecommendations();
    // Mostrar el esqueleto de las tarjetas de productos
    skeletonCard(config.containerCard);
    // Mostrar información de texto en el menú
    informationText({ name: 'Productos', description: 'Explora nuestra selección de productos de calidad para realzar tu belleza.' });
    // Ocultar el identificador de la categoría de tarjetas
    config.idCardCategory.classList.add('hidden');
    // Realizar la solicitud para obtener los productos y esperar la respuesta
    let data = await fetchProducts({ quantity: 18 });
    // Ocultar los esqueletos de tarjetas
    hiddenSkeleton(config.containerCard);
    // Renderizar los productos en las tarjetas
    const items = data.map(item => {
        config.containerCard.innerHTML += renderProducts(item);
    });
};
