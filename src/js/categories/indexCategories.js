// Importar la configuración y las funciones necesarias desde los módulos correspondientes
import { config } from "../config/index.config.js";
import { hiddenCategory } from "../menu/NavFuctions.js";
import { drawTheEyesCategory } from "./EyesCategory.js";
import { drawTheFacesCategory } from "./FacesCategory.js";
import { drawTheLipsCategory } from "./LipsCategory.js";
import { drawTheProductsCategory } from "./productCategory.js";

// Función para mostrar el segundo contenedor y actualizar según la categoría seleccionada
const secondContainer = () => {
    // Mostrar el título del segundo contenedor
    config.titleSecond.classList.remove('hidden');
    // Mostrar el segundo contenedor de tarjetas
    config.secondContainerCard.classList.remove('hidden', 'md:hidden');
}

// Función para manejar la categoría de productos
export const productCategory = (e) => {
    // Obtener el ID de la categoría seleccionada
    const categoryId = e.target.id;
    
    // Verificar la categoría seleccionada y realizar acciones correspondientes
    if (categoryId === 'products') {
        // Ocultar el segundo contenedor y el título
        config.titleSecond.classList.add('hidden');
        config.secondContainerCard.classList.add('hidden', 'md:hidden');
        // Dibujar la categoría de productos
        drawTheProductsCategory();
    } else if (categoryId === 'faces') {
        // Mostrar el segundo contenedor y dibujar la categoría de rostro
        secondContainer();
        drawTheFacesCategory();
    } else if (categoryId === 'lips') {
        // Mostrar el segundo contenedor y dibujar la categoría de labios
        secondContainer();
        drawTheLipsCategory();
    } else if (categoryId === 'eyes') {
        // Mostrar el segundo contenedor y dibujar la categoría de ojos
        secondContainer();
        drawTheEyesCategory();
    } else if (categoryId === 'logo') {
        // Ocultar el menú lateral
        hiddenCategory();
    }
};
