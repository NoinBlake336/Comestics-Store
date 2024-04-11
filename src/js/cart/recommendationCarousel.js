import { config } from "../config/index.config.js";





export const moveCarouselRecommendations = ()=> {
    setInterval(() => {
        if (!config.toTheRight) {
            config.recommedationsContainer.style.left = `-${config.contRecommendations}px`;
            config.contRecommendations++;
            if (config.contRecommendations >= config.recommedationsContainer.scrollWidth) {
                config.toTheRight = true; 
            }
        } else {
            config.contRecommendations--;
            config.recommedationsContainer.style.left = `${config.contRecommendations}px`;
            if (config.contRecommendations <= 0) {
                config.toTheRight = false; 
            }
        }
    }, 13);
}



