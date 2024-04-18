
import { config } from "../config/index.config.js";
import { sketchingRecommendedProducts } from "../drawingCard/SketchingRecommendedProducts.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";
import { fetchRecommendationsProducts } from "./fetchProducts.js";




export const fetchRecommendations = async() =>{
    const data = await fetchRecommendationsProducts(12);
    hiddenSkeleton(config.recommedationsContainer);
    data.map((item)=>{
        config.recommedationsContainer.innerHTML += sketchingRecommendedProducts(item,config.contItemsRecommendations++);
    });

    

};