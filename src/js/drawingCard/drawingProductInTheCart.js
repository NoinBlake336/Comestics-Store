import { config } from "../config/index.config.js";

export const drawingProductInTheCart = (date) => {
    const {
        api_featured_image,
        name,
        price
    } = date;

    config.totalPriceContainer.innerText = `$${config.totalPrice.toFixed(2)}`
    return  `
    <div class="rounded-lg p-3 pb-4 pl-5 grid grid-cols-[55px_minmax(145px,_1fr)_45px]  relative overflow-hidden" style="background-color: rgb(244, 215, 216);">
        <div class="flex items-center relative z-0"><img class="relative z-10 inline-block w-[50px] h-[50px]  ring-2 ring-white ring-opacity-50  obejct-cover" src="${api_featured_image}" alt=""></div>
        <div class="absolute w-1.5 top-0 bottom-0 left-0" style="background-color: rgb(185, 69, 84);"></div>
        <div class="grid pl-2 items-center">

            <div class="font-medium text-sm" style="color: rgb(61, 20, 27);">${name}</div>
            <div class="text-xs font-medium" style="color: rgb(112, 43, 57);"> ${price} </div>

        </div>
        <div class="w-full h-6 rounded-lg flex items-center justify-center sm:justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4" style="color: rgb(130, 47, 62);">
            <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z">
            </path>
        </svg></div>

    </div>
    `
}

export const drawingAnEmptyCartList = () =>{
    config.totalPriceContainer.innerHTML = '$0'
    return `
    <div class="rounded-lg p-3 pb-4 pl-5 flex justify-center items-center  relative overflow-hidden" style="background-color: rgb(244, 215, 216);">
        <div class="absolute w-1.5 top-0 bottom-0 left-0" style="background-color: rgb(185, 69, 84);"></div>
        <div class="grid pl-2 items-center">

            <div class="font-medium text-sm" style="color: rgb(61, 20, 27);">No hay Productos</div>

        </div>

    </div>
    ` 
}