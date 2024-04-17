import { config } from "./config/index.config.js";


// Función para manejar la sesión de inicio de sesión y cierre de sesión
export const cardSession = (e) => {
    // Obtener el ID del elemento que desencadenó el evento
    const tag = e.target.id;
    // Mostrar la tarjeta de sesión cuando se hace clic en "sign-in"
    if (tag === 'sign-in') {
        if (config.sessionCard.classList.contains('hidden')) {
            config.sessionCard.classList.remove('hidden');
        }
    }
    // Ocultar la tarjeta de sesión cuando se hace clic en "close-session"
    if (tag === 'close-session') {
        config.sessionCard.classList.add('hidden');
    }
};
