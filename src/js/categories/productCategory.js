import { hiddenMain } from "../menu/NavFuctions.js";
import { informationText } from "../menu/NavFuctions.js";
import { fetchProducts } from "../requests/fetchProducts.js";
import { skeletonCard, skeletonCardRecommendations} from "../skeleton-loaders/cardSkeleton.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { config } from "../config/index.config.js";
import { moveCarouselRecommendations } from "../cart/moveRecommendationCarousel.js";
import { fetchRecommendations } from "../requests/fetchItemsRecommendations.js";
import { renderProducts } from "./writeCard.js/writeProducts.js";









export const drawTheProductsCategory = async () => {
    hiddenMain();
    skeletonCardRecommendations(config.recommedationsContainer);
    fetchRecommendations();
    moveCarouselRecommendations();
    skeletonCard(config.containerCard);
    informationText({name:'Productos', description:'Explora nuestra selección de productos de calidad para realzar tu belleza.'});
    config.idCardCategory.classList.add('hidden');
    let data = await fetchProducts({quantity:16});
    hiddenSkeleton(config.containerCard);
    const items = data.map(item => {
        config.containerCard.innerHTML += renderProducts(item);
    });
};
