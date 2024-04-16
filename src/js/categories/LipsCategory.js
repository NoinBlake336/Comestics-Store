import { config } from "../config/index.config.js";
import { categoryHandler } from "../handler/categoryHandler.js"


export const drawTheLipsCategory = async() =>{
    categoryHandler({name:'Labios',
        nameProducts:'Labiales',
        secondNameProduct:'Delineador de labios', description:'Descubre nuestra colección de labiales, brillos, delineadores y cuidado labial para lucir unos labios irresistibles en todo momento.',category:'lipstick',
        secondCategory:'lip_liner',
        target:config.containerCard,
        secondTarget:config.secondContainerCard,
    });
    
}