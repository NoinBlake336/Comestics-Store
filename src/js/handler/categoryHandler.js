import { fetchProducts } from "../fetchProducts.js";
import { skeletonCard } from "../skeleton-loaders/cardSkeleton.js";
import { hiddenMain, idSecondContainerCard, informationText, showCategoryCard } from "../menu/NavFuctions.js";
import { renderProducts } from "../categories/productCategory.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";

const containerCards = document.getElementById('container-cards');

export const categoryHandler = async ({name,description,category,secondCategory, nameProducts, secondNameProduct,target,secondTarget})=>{
    hiddenMain();
    informationText({name:name,description:description,nameProducts:nameProducts, secondNameProduct:secondNameProduct});
    showCategoryCard();
    skeletonCard(target);
    const data = await fetchProducts(category,4);
    hiddenSkeleton(target);
    const items = data.map(item => {
        containerCards.innerHTML += renderProducts(item);
    });

    if(secondCategory){
        skeletonCard(secondTarget);
        const data = await fetchProducts(secondCategory,4);
        hiddenSkeleton(secondTarget);
        const itemsSecond = data.map(item => {
            idSecondContainerCard.innerHTML += renderProducts(item) 
        });
    }
};
