import { categoryHandler } from "../handler/categoryHandler.js";
import { idSecondContainerCard } from "../menu/NavFuctions.js";
import { containerCards } from "./productCategory.js";
export const drawTheFacesCategory = () => {
    categoryHandler({name:'Rostro',
    description:'Descubre nuestra sección ROSTRO: todo lo que necesitas para una piel impecable y radiante. <br> Encuentra bases, correctores, iluminadores y cuidado de la piel para realzar tu belleza natural.',nameProducts:'Rubor', 
    secondNameProduct:'Sombra',
    category:'blush', 
    secondCategory:'eyeshadow',
    target:containerCards,secondTarget:idSecondContainerCard});
};