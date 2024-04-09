import { hiddenCategory, idSecondContainerCard, idTitleSecond } from "../menu/NavFuctions.js";
import { drawTheEyesCategory } from "./EyesCategory.js";
import { drawTheFacesCategory } from "./FacesCategory.js";
import { drawTheLipsCategory } from "./LipsCategory.js";
import { drawTheProductsCategory } from "./productCategory.js";

const secondContainer = ()=>{
    idTitleSecond.classList.remove('hidden')
    idSecondContainerCard.classList.remove('hidden','md:hidden');
}

export const productCategory = (e)=>{
    const categoryId = e.target.id;
    if(!categoryId == 'products' || !categoryId == 'faces' || !categoryId == 'lips' || !categoryId == 'eyes') return;
    if(categoryId == 'products') {
        idTitleSecond.classList.add('hidden')
        idSecondContainerCard.classList.add('hidden','md:hidden');
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

