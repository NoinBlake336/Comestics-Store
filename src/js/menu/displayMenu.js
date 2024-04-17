// Importar la configuración global de la aplicación
import { config } from "../config/index.config.js";

// Función para eliminar estilos del menú desplegable
const deleteMenuStyles = () => {
    // Obtener el elemento de entrada del menú
    const inputElement = config.containerMenu.querySelector('input[type="checkbox"]');
    // Ocultar los elementos del menú
    config.menuItems.classList.add('hidden');
    // Desmarcar el checkbox del menú
    if (inputElement.checked) {
        inputElement.checked = false;
    }
};

// Función para mostrar el menú desplegable
export const displayMenu = (e) => {
    // Obtener el tipo de elemento que desencadenó el evento
    const hamburgerMenu = e.target.attributes[0].nodeValue;
    // Verificar si el tipo de elemento es un checkbox (hamburguesa)
    if (hamburgerMenu != "checkbox") return;
    // Mostrar los elementos del menú
    if (config.menuItems.classList.contains('hidden')) {
        config.menuItems.classList.remove('hidden');
    }
};

// Función para cerrar el menú desplegable
export const closeMenu = (e) => {
    // Obtener el ID del elemento que desencadenó el evento
    const backMenu = e.target.id;
    // Verificar si el ID corresponde al botón de retroceso del menú
    if (backMenu != 'icon-back') return;
    // Eliminar estilos y ocultar el menú desplegable
    deleteMenuStyles();
};
