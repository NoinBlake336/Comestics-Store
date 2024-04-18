
import { config } from "../config/index.config.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { fetchRecommendationsProducts } from "./fetchProducts.js";
import { sketchingRecommendedProducts } from "../drawingCard/SketchingRecommendedProducts.js";




export const fetchRecommendations = async() =>{
    const data = await fetchRecommendationsProducts(12);
    hiddenSkeleton(config.recommedationsContainer);
    data.map((item)=>{
        config.recommedationsContainer.innerHTML += sketchingRecommendedProducts(item,config.contItemsRecommendations++);
    });

    

};