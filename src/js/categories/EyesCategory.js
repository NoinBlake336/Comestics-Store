import { config } from "../config/index.config.js";
import { categoryHandler } from "../handler/categoryHandler.js";


export const drawTheEyesCategory = () =>{

    categoryHandler({
        name:'Ojos',
        description:'Explora nuestra gama de productos para ojos, desde sombras de ojos y delineadores hasta <br> máscaras de pestañas y cuidado de cejas, para lograr looks deslumbrantes y expresivos.',
        nameProducts:'Cejas',
        secondNameProduct:'Delineador de ojos',
        category:'eyebrow',
        secondCategory:'eyeliner',
        target:config.containerCard,
        secondTarget:config.secondContainerCard,
    })
};