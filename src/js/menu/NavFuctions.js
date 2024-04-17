// Importar la configuración global de la aplicación
import { config } from "../config/index.config.js";

// Función para ocultar el contenido principal
export const hiddenMain = () => {
    // Ocultar el contenido principal y sus versiones responsivas
    config.idMain.classList.add('hidden');
    config.idMain.classList.add('md:hidden');
    // Mostrar la sección de categorías si está oculta
    if (config.categorySectionId.classList.contains('hidden')) config.categorySectionId.classList.remove('hidden');
    // Ocultar los elementos del menú desplegable
    const inputElement = config.containerMenu.querySelector('input[type="checkbox"]');
    config.menuItems.classList.add('hidden');
    // Desmarcar el checkbox del menú si está marcado
    if (inputElement.checked) inputElement.checked = false;
    // Mostrar el pie de página si está oculto
    if (config.footer.classList.contains('hidden')) {
        config.footer.classList.remove('hidden');
    }
};

// Función para mostrar la tarjeta de categoría
export const showCategoryCard = () => {
    // Mostrar la tarjeta de categoría si está oculta
    if (config.idCardCategory.classList.contains('hidden')) config.idCardCategory.classList.remove('hidden');
};

// Función para establecer la información de texto en diferentes elementos HTML
export const informationText = ({name, description, nameProducts, secondNameProduct}) => {
    // Establecer el nombre de la categoría en el elemento HTML correspondiente
    config.idName.innerHTML = name;
    // Establecer la descripción de la categoría en el elemento HTML correspondiente
    config.idDescription.innerHTML = description;
    // Establecer el título principal en función del nombre de los productos o de la categoría
    config.idTitle.innerHTML = nameProducts || name;
    // Establecer el título secundario en función del segundo nombre de los productos
    config.titleSecond.innerHTML = secondNameProduct;
};

// Función para ocultar la sección de categorías y mostrar el contenido principal
export const hiddenCategory = () => {
    // Mostrar el contenido principal y sus versiones responsivas
    config.idMain.classList.remove('hidden');
    config.idMain.classList.remove('md:hidden');
    // Ocultar la sección de categorías
    config.categorySectionId.classList.add('hidden');
};
