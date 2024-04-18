import { config } from "../config/index.config.js";
import { drawingAnEmptyCartList } from "../drawingCard/drawingProductInTheCart.js";
import { updateCartItemCount } from "./updateCartItemCount.js";

export const clearShoppingCart = (e) =>{
    if(e.target.id === 'clear-shopping-cart'){

        const isGetProducts = localStorage.getItem('cart');
        if(isGetProducts){
            config.containerCart.innerHTML = drawingAnEmptyCartList();;
            localStorage.removeItem('cart');
            updateCartItemCount()
        }
    }
}