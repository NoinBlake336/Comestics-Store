import { categoryHandler } from "../handler/categoryHandler.js"
import { idSecondContainerCard } from "../menu/NavFuctions.js";
import { containerCards } from "./productCategory.js";


export const drawTheLipsCategory = async() =>{
    categoryHandler({name:'Labios',
    nameProducts:'Labiales',
    secondNameProduct:'Delineador de labios', description:'Descubre nuestra colección de labiales, brillos, delineadores y cuidado labial para lucir unos labios irresistibles en todo momento.',category:'lipstick',
    secondCategory:'lip_liner',
    target:containerCards,
    secondTarget:idSecondContainerCard,
    
});
}