import { renderItemsRecommendations } from "../categories/writeCard.js/writeRecommendationsProduct.js";
import { config } from "../config/index.config.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { fetchProducts, fetchRecommendationsProducts } from "./fetchProducts.js";




export const fetchRecommendations = async() =>{
    const data = await fetchRecommendationsProducts(12);
    hiddenSkeleton(config.recommedationsContainer);
    data.map((item)=>{
        config.recommedationsContainer.innerHTML += renderItemsRecommendations(item,config.contItemsRecommendations++);
    });

    

};