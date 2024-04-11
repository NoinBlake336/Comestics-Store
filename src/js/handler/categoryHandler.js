import { fetchProducts } from "../fetchProducts.js";
import { skeletonCard } from "../skeleton-loaders/cardSkeleton.js";
import { hiddenMain, informationText, showCategoryCard } from "../menu/NavFuctions.js";
import { renderProducts } from "../categories/productCategory.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { config } from "../config/index.config.js";
import { moveCarouselRecomendaciones } from "../cart/recommendationCarousel.js";


export const categoryHandler = async ({name,description,category,secondCategory, nameProducts, secondNameProduct,target,secondTarget})=>{
    hiddenMain();
    moveCarouselRecomendaciones();
    informationText({name:name,description:description,nameProducts:nameProducts, secondNameProduct:secondNameProduct});
    showCategoryCard();
    skeletonCard(target);
    const data = await fetchProducts(category,4);
    hiddenSkeleton(target);
    const items = data.map(item => {
        config.containerCard.innerHTML += renderProducts(item);
    });

    if(secondCategory){
        skeletonCard(secondTarget);
        const data = await fetchProducts(secondCategory,4);
        hiddenSkeleton(secondTarget);
        const itemsSecond = data.map(item => {
            config.secondContainerCard.innerHTML += renderProducts(item);
        });
    }
};
