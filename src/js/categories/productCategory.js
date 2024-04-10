import { hiddenMain } from "../menu/NavFuctions.js";
import { informationText } from "../menu/NavFuctions.js";
import { fetchProducts } from "../fetchProducts.js";
import { skeletonCard} from "../skeleton-loaders/cardSkeleton.js";
import { hiddenSkeleton } from "../skeleton-loaders/hiddenSkeleton.js";


export const containerCards = document.getElementById('container-cards');

const idCardCategory = document.getElementById('card-category');


export const renderProducts = (data) => {
    const {api_featured_image,name,id} = data;
    return `
    <div id="${id}" class="card-shadow rounded-2xl p-2 bg-cover bg-center h-[200px] relative overflow-hidden cursor-pointer hover:border-solid hover:border-2 hover:border-[#BA5852] sm:h-96 " style="background-image: url(&quot;${api_featured_image});">
        <div class="h-full flex ">
            <div class="leading-none p-1 rounded-2xl mt-auto mb-2 text-sm font-semibold tracking-tight text-white border w-full bg-opacity-80 backdrop-filter backdrop-blur-sm text-center sm:text-2xl" style="background-color: rgba(154, 65, 59, 0.8); border-color: rgb(184, 81, 74);"> 
                ${name}
            </div>
        </div>
    </div>
    `
}

export const drawTheProductsCategory = async () => {
    hiddenMain();
    skeletonCard(containerCards);
    informationText({name:'Productos', description:'Explora nuestra selección de productos de calidad para realzar tu belleza.'});
    idCardCategory.classList.add('hidden');
    let data = await fetchProducts('',2);
    hiddenSkeleton(containerCards);
    const items = data.map(item => {
        containerCards.innerHTML += renderProducts(item);
    });
};
