import { fetchProducts } from "../requests/fetchProducts.js";
import { skeletonCard} from "../skeleton-loaders/cardSkeleton.js";
import { hiddenMain, informationText, showCategoryCard } from "../menu/NavFuctions.js";

import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { config } from "../config/index.config.js";
import { moveCarouselRecommendations } from "../cart/moveRecommendationCarousel.js";
import { renderProducts } from "../categories/writeCard.js/writeProducts.js";
import { productSelection } from "../cart/ProductSelection.js";


export const categoryHandler = async ({name,description,category,secondCategory, nameProducts, secondNameProduct,target,secondTarget})=>{
    hiddenMain();
    moveCarouselRecommendations();
    skeletonCard(config.containerCard);
    informationText({name:name,description:description,nameProducts:nameProducts, secondNameProduct:secondNameProduct});
    showCategoryCard();
    skeletonCard(target);
    const data = await fetchProducts({category:category,quantity:20});
    hiddenSkeleton(target);
    const items = data.map(item => {
        config.containerCard.innerHTML += renderProducts(item);
    });

    if(secondCategory){
        skeletonCard(secondTarget);
        const data = await fetchProducts({category:secondCategory,quantity:20});
        hiddenSkeleton(secondTarget);
        const itemsSecond = data.map(item => {
            config.secondContainerCard.innerHTML += renderProducts(item);
        });
    }


    
};
