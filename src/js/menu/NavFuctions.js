import { config } from "../config/index.config.js";





export const hiddenMain = ()=>{
    config.idMain.classList.add('hidden');
    config.idMain.classList.add('md:hidden');
    if(config.categorySectionId.classList.contains('hidden')) config.categorySectionId.classList.remove('hidden');
    const inputElement = config.containerMenu.querySelector('input[type="checkbox"]');
    config.menuItems.classList.add('hidden');
    if (inputElement.checked) inputElement.checked = false;
};

   export const showCategoryCard = ()=>{
    if(config.idCardCategory.classList.contains('hidden')) config.idCardCategory.classList.remove('hidden');
}

export const informationText = ({name, description,nameProducts,secondNameProduct})=>{
    config.idName.innerHTML=name;
    config.idDescription.innerHTML=description;
    config.idTitle.innerHTML=nameProducts || name;
    config.titleSecond.innerHTML = secondNameProduct;

    
};


export const hiddenCategory = () =>{
    config.idMain.classList.remove('hidden');
    config.idMain.classList.remove('md:hidden');
    config.categorySectionId.classList.add('hidden');
};