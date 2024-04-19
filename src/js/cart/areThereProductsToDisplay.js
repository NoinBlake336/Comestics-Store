import { config } from "../config/index.config.js";
import { drawingAnEmptyCartList, drawingProductInTheCart } from "../drawingCard/drawingProductInTheCart.js";

export const areThereProductsToDisplay = ()=> {
    config.totalPrice = 0;
    const getAllProducts = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    if(!Array.isArray(getAllProducts)  || !getAllProducts.length ) {
        config.containerCart.innerHTML = drawingAnEmptyCartList();
        return
    };
    
    config.containerCart.innerHTML = '';

    getAllProducts.map(product=>{
        config.totalPrice += parseFloat(product.price)
        config.containerCart.innerHTML += drawingProductInTheCart(product);
    })
}