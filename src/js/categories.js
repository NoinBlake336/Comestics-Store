import { hiddenCategory } from "./js-categories/NavFuctions.js";
import { drawTheEyesCategory } from "./js-categories/EyesCategory.js";
import { drawTheFacesCategory } from "./js-categories/FacesCategory.js";
import { drawTheLipsCategory } from "./js-categories/LipsCategory.js";
import { drawTheProductsCategory } from "./js-categories/productCategory.js";


export const productCategory = (e)=>{
    const categoryId = e.target.id;
    if(!categoryId == 'products' || !categoryId == 'faces' || !categoryId == 'lips' || !categoryId == 'eyes') return;
    if(categoryId == 'products') drawTheProductsCategory();
    if(categoryId == 'faces') drawTheFacesCategory();
    if(categoryId == 'lips') drawTheLipsCategory();
    if(categoryId == 'eyes') drawTheEyesCategory();
    if(categoryId =='logo') hiddenCategory();

}; 