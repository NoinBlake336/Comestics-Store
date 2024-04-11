import { config } from "../config/index.config.js";
import { categoryHandler } from "../handler/categoryHandler.js";

export const drawTheFacesCategory = () => {
    categoryHandler({name:'Rostro',
    description:'Descubre nuestra sección ROSTRO: todo lo que necesitas para una piel impecable y radiante. <br> Encuentra bases, correctores, iluminadores y cuidado de la piel para realzar tu belleza natural.',nameProducts:'Rubor', 
    secondNameProduct:'Sombra',
    category:'blush', 
    secondCategory:'eyeshadow',
    target:config.containerCard,
    secondTarget:config.secondContainerCard});
};