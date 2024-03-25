import { hiddenMain } from "./NavFuctions.js";
import { informationText } from "./NavFuctions.js";
import { showCategoryCard } from "./NavFuctions.js";

export const drawTheFacesCategory = () => {
    hiddenMain();
    informationText('Rostro','Descubre nuestra sección ROSTRO: todo lo que necesitas para una piel impecable y radiante. <br> Encuentra bases, correctores, iluminadores y cuidado de la piel para realzar tu belleza natural.',);
    showCategoryCard();
};