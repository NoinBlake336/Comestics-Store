import { hiddenMain } from "./NavFuctions.js";
import { informationText } from "./NavFuctions.js";
import { fetchProducts } from "../fetchProducts.js";
const containerCards = document.getElementById('container-cards');

const idCardCategory = document.getElementById('card-category');

const renderProducts = (data)=>{
    
    
    return  ` `
    
}

export const drawTheProductsCategory = async()=>{
    hiddenMain();
    informationText('Productos','Explora nuestra selección de productos de calidad para realzar tu belleza.');
    idCardCategory.classList.add('hidden');
    let data = await fetchProducts();
    const items = data.map(item =>{
        containerCards.innerHTML = renderProducts(item);
    });
};