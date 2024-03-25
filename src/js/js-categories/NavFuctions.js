const menuItems = document.getElementById('menu-items');
const idMain = document.getElementById('main'); 
const idName = document.getElementById('category-name');
const idDescription = document.getElementById('category-description');
const idTitle = document.getElementById('title');
const idTitleCard = document.getElementById('title-card');
const categorySectionId = document.getElementById('categories');
const idCardCategory = document.getElementById('card-category');
const containerMenu = document.getElementById('container-menu');


export const hiddenMain = ()=>{
    idMain.classList.add('hidden');
    idMain.classList.add('md:hidden');
    if(categorySectionId.classList.contains('hidden')) categorySectionId.classList.remove('hidden');
    const inputElement = containerMenu.querySelector('input[type="checkbox"]');
    menuItems.classList.add('hidden');
    if (inputElement.checked) inputElement.checked = false;
};

export const showCategoryCard = ()=>{
    if(idCardCategory.classList.contains('hidden')) idCardCategory.classList.remove('hidden');
}

export const informationText = (name, description)=>{
    idName.innerHTML=name;
    idDescription.innerHTML=description;
    idTitle.innerHTML=name;
};


export const hiddenCategory = () =>{
    idMain.classList.remove('hidden');
    idMain.classList.remove('md:hidden');
    categorySectionId.classList.add('hidden');
};