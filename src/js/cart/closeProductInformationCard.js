import { config } from "../config/index.config.js";

export const closeProductInformationCard = (e) =>{
    // Verificar si el clic se realizó en el botón de cerrar
    if (e.target.id === 'close-product-information-card') {
        // Ocultar la carta de información del producto si está visible
        if (!config.productInformationCard.classList.contains('hidden')) {
            config.productInformationCard.classList.add('hidden');
        }
    }
};

