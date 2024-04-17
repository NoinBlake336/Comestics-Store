
import { config } from "../config/index.config.js";
import { fetchProducts, productList } from "../requests/fetchProducts.js";

export const productSelection = async(e) =>{
    try {   
        const idProduct = parseInt(e.target.id);
        if(!isNaN(idProduct)){
            // config.productInformationCard.classList.remove('hidden');
            console.log(productList);
            productList.map(item=>{
                if(item.id === idProduct){
                    console.log(item)
                }
            })
        }
    } catch (error) {
        return;
    }
};