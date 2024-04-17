// Importar funciones y módulos necesarios
import { fetchProducts, fetchRecommendationsProducts } from "../requests/fetchProducts.js"; // Importa la función para obtener productos
import { skeletonCard, skeletonCardRecommendations } from "../skeleton-loaders/cardSkeleton.js"; // Importa la función para mostrar el esqueleto de tarjetas
import { hiddenMain, informationText, showCategoryCard } from "../menu/NavFuctions.js"; // Importa funciones para controlar la visualización de elementos en el menú

import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js"; // Importa la función para ocultar el esqueleto de tarjetas
import { config } from "../config/index.config.js"; // Importa la configuración global de la aplicación
import { moveCarouselRecommendations } from "../cart/moveRecommendationCarousel.js"; // Importa la función para mover el carrusel de recomendaciones
import { renderProducts } from "../categories/writeCard.js/writeProducts.js"; // Importa la función para renderizar productos en las tarjetas
import { fetchRecommendations } from "../requests/fetchItemsRecommendations.js";

// Definir la función categoryHandler que maneja la carga y visualización de productos para una categoría específica
export const categoryHandler = async ({name,description,category,secondCategory, nameProducts, secondNameProduct,target,secondTarget}) => {
    // Ocultar el menú principal
    hiddenMain();
    // Mostrar el esqueleto de las tarjetas de recomendaciones
    skeletonCardRecommendations(config.recommedationsContainer);
    // Realizar la solicitud para obtener las recomendaciones
    fetchRecommendations();
    // Mover el carrusel de recomendaciones
    moveCarouselRecommendations();
    // Mostrar el esqueleto de tarjetas en el contenedor principal de tarjetas
    skeletonCard(config.containerCard);
    // Mostrar información de texto en el menú
    informationText({ name: name, description: description, nameProducts: nameProducts, secondNameProduct: secondNameProduct });
    // Mostrar la tarjeta de categoría en el menú
    showCategoryCard();
    // Mostrar el esqueleto de tarjetas en el objetivo especificado
    skeletonCard(target);
    // Obtener los productos de la categoría principal y esperar la respuesta
    const data = await fetchProducts({ category: category, quantity: 12 });
    // Ocultar el esqueleto de tarjetas en el objetivo especificado
    hiddenSkeleton(target);
    // Renderizar los productos en las tarjetas del contenedor principal
    const items = data.map(item => {
        config.containerCard.innerHTML += renderProducts(item);
    });

    // Verificar si hay una segunda categoría especificada
    if (secondCategory) {
        // Mostrar el esqueleto de tarjetas en el segundo objetivo especificado
        skeletonCard(secondTarget);
        // Obtener los productos de la segunda categoría y esperar la respuesta
        const data = await fetchProducts({ category: secondCategory, quantity: 12 });
        // Ocultar el esqueleto de tarjetas en el segundo objetivo especificado
        hiddenSkeleton(secondTarget);
        // Renderizar los productos en las tarjetas del segundo contenedor
        const itemsSecond = data.map(item => {
            config.secondContainerCard.innerHTML += renderProducts(item);
        });
    }
};
