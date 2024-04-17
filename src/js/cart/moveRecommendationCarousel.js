// Importar la configuración desde el módulo index.config.js
import { config } from "../config/index.config.js";

// Función para mover el carrusel de recomendaciones
export const moveCarouselRecommendations = () => {
    // Configurar un intervalo para mover el carrusel
    setInterval(() => {
        // Verificar la dirección del movimiento del carrusel
        if (!config.toTheRight) {
            // Si el carrusel se mueve hacia la izquierda
            config.recommedationsContainer.style.left = `-${config.contRecommendations}px`; // Mover el carrusel a la izquierda
            config.contRecommendations++; // Incrementar el contador de desplazamiento
            // Verificar si se alcanzó el final del carrusel
            if (config.contRecommendations >= config.recommedationsContainer.scrollWidth) {
                config.toTheRight = true; // Cambiar la dirección del movimiento a la derecha
            }
        } else {
            // Si el carrusel se mueve hacia la derecha
            config.contRecommendations -= 10; // Retroceder el contador de desplazamiento
            config.recommedationsContainer.style.left = `${config.contRecommendations}px`; // Mover el carrusel a la derecha
            // Verificar si se alcanzó el inicio del carrusel
            if (config.contRecommendations <= 0) {
                config.toTheRight = false; // Cambiar la dirección del movimiento a la izquierda
            }
        }
    }, 13); // Establecer el intervalo de tiempo para el movimiento del carrusel
};



