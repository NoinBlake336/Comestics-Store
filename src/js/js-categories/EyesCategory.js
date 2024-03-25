import { hiddenMain } from "./NavFuctions.js";
import { informationText } from "./NavFuctions.js";
import { showCategoryCard } from "./NavFuctions.js";

export const drawTheEyesCategory = () =>{
    hiddenMain();
    informationText('Ojos','Explora nuestra gama de productos para ojos, desde sombras de ojos y delineadores hasta <br> máscaras de pestañas y cuidado de cejas, para lograr looks deslumbrantes y expresivos.');
    showCategoryCard();
};