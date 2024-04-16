const containerCards = document.getElementById('container-cards');
const idCardCategory = document.getElementById('card-category');
const secondContainerCard = document.getElementById('second-container-cards');
const titleSecond = document.getElementById('second-title');
const menuItems = document.getElementById('menu-items');
const containerMenu = document.getElementById('container-menu');

const idMain = document.getElementById('main'); 
const idName = document.getElementById('category-name');
const idDescription = document.getElementById('category-description');
const idTitle = document.getElementById('title');
const idTitleCard = document.getElementById('title-card');
const categorySectionId = document.getElementById('categories');

const sessionCard = document.getElementById('session-card');
const closeSession = document.getElementById('close-session');
const singin = document.getElementById('sign-in');


const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';
const quantityProducts = document.getElementById('quantity-products');
let loadedProductsCount = 0;

const shoppingCart = document.getElementById('cart');
const inputElement = document.getElementById('container-menu').querySelector('input[type="checkbox"]');

const recommedationsContainer = document.getElementById('recommendations-container');
let contRecommendations = 0;
let toTheRight = false;
let contItemsRecommendations = 0;


const footerHidden = document.getElementById('footer');

export const config = {
    containerCard: containerCards,
    secondContainerCard:secondContainerCard,
    idCardCategory:idCardCategory,
    titleSecond: titleSecond,
    menuItems:menuItems,
    containerMenu:containerMenu,
    idMain:idMain,
    idName:idName,
    idDescription:idDescription,
    idTitle:idTitle,
    idTitleCard:idTitleCard,
    categorySectionId:categorySectionId,
    sessionCard:sessionCard,
    closeSession:closeSession,
    singin:singin,
    urlFecht:URL,
    quantityProducts:quantityProducts,
    loadedProductsCount:loadedProductsCount,
    shoppingCart:shoppingCart,
    inputElement:inputElement,
    recommedationsContainer:recommedationsContainer,
    contRecommendations:contRecommendations,
    contItemsRecommendations:contItemsRecommendations,
    toTheRight:toTheRight,
    footer: footerHidden,
};