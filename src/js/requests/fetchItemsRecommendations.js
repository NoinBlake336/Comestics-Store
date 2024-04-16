import { renderItemsRecommendations } from "../categories/writeCard.js/writeRecommendationsProduct.js";
import { config } from "../config/index.config.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { fetchProducts } from "./fetchProducts.js";




export const fetchRecommendations = async() =>{
    const data = await fetchProducts({quantity:30});

    hiddenSkeleton(config.recommedationsContainer);

    data.map((item)=>{
        config.recommedationsContainer.innerHTML += renderItemsRecommendations(item,config.contItemsRecommendations++);
    });

    

};