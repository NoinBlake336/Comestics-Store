import { config } from "../config/index.config.js";
import { hiddenCategory } from "../menu/NavFuctions.js";
import { drawTheEyesCategory } from "./EyesCategory.js";
import { drawTheFacesCategory } from "./FacesCategory.js";
import { drawTheLipsCategory } from "./LipsCategory.js";
import { drawTheProductsCategory } from "./productCategory.js";

const secondContainer = ()=>{
    config.titleSecond.classList.remove('hidden')
    config.secondContainerCard.classList.remove('hidden','md:hidden');
}

export const productCategory = (e)=>{
    const categoryId = e.target.id;
    if(!categoryId == 'products' || !categoryId == 'faces' || !categoryId == 'lips' || !categoryId == 'eyes') return;
    if(categoryId == 'products') {
        config.titleSecond.classList.add('hidden')
        config.secondContainerCard.classList.add('hidden','md:hidden');
        drawTheProductsCategory();
    };
    if(categoryId == 'faces'){ 
        secondContainer();
        drawTheFacesCategory();
    };
    if(categoryId == 'lips') {
        secondContainer();
        drawTheLipsCategory()
    };
    if(categoryId == 'eyes') {
        secondContainer();
        drawTheEyesCategory()
    };
    if(categoryId =='logo') hiddenCategory();

}; 

