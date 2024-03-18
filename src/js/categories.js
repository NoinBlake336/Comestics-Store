const idMain = document.getElementById('main'); 
const idName = document.getElementById('category-name');
const idDescription = document.getElementById('category-description');
const idTitle = document.getElementById('title');
const idTitleCard = document.getElementById('title-card');
const categorySectionId = document.getElementById('categories');
const idCardCategory = document.getElementById('card-category');
// Functions


const informationText = (name, description)=>{
    idName.innerHTML=name;
    idDescription.innerHTML=description;
    idTitle.innerHTML=name;
};

const hiddenCategory = () =>{
    idMain.classList.remove('hidden');
    idMain.classList.remove('md:hidden');
    categorySectionId.classList.add('hidden');
};


const hiddenMain = ()=>{
    idMain.classList.add('hidden');
    idMain.classList.add('md:hidden');
    if(categorySectionId.classList.contains('hidden')) categorySectionId.classList.remove('hidden');
};

const showCategoryCard = ()=>{
    if(idCardCategory.classList.contains('hidden')) idCardCategory.classList.remove('hidden');
}

const drawTheProductsCategory = ()=>{
    hiddenMain();
    informationText();
    informationText('Productos','Explora nuestra selección de productos de calidad para realzar tu belleza.');
    idCardCategory.classList.add('hidden');
};

const drawTheFacesCategory = () => {
    hiddenMain();
    informationText('Rostro','Descubre nuestra sección ROSTRO: todo lo que necesitas para una piel impecable y radiante. <br> Encuentra bases, correctores, iluminadores y cuidado de la piel para realzar tu belleza natural.',);
    showCategoryCard();
};

const drawTheLipsCategory = () =>{
    hiddenMain();
    informationText('Labios','Descubre nuestra colección de labiales, brillos, delineadores y cuidado labial para lucir unos labios irresistibles en todo momento.');
    showCategoryCard();
}

const drawTheEyesCategory = () =>{
    hiddenMain();
    informationText('Ojos','Explora nuestra gama de productos para ojos, desde sombras de ojos y delineadores hasta <br> máscaras de pestañas y cuidado de cejas, para lograr looks deslumbrantes y expresivos.');
    showCategoryCard();
}
export const productCategory = (e)=>{
    const categoryId = e.target.id;
    console.log(categoryId);
    if(!categoryId == 'products' || !categoryId == 'faces' || !categoryId == 'lips' || !categoryId == 'eyes') return;
    if(categoryId == 'products') drawTheProductsCategory();
    if(categoryId == 'faces') drawTheFacesCategory();
    if(categoryId == 'lips') drawTheLipsCategory();
    if(categoryId == 'eyes') drawTheEyesCategory();
    if(categoryId =='logo') hiddenCategory();

}; 