// Función para renderizar los productos
export const renderProducts = (data) => {
    // Extraer los datos necesarios del objeto de datos
    const { api_featured_image, name, id } = data;

    // Retornar un fragmento de HTML que representa un producto
    return `
    <div  class="card-shadow rounded-2xl p-2 bg-cover bg-center h-[200px] relative overflow-hidden cursor-pointer hover:border-solid hover:border-2 hover:border-[#BA5852] sm:h-[200px] " style="background-image: url(&quot;${api_featured_image});">
        <div id="${id}" class="h-full flex ">
            <div class="leading-none p-1 rounded-2xl mt-auto mb-2 text-sm font-semibold tracking-tight text-white border w-full bg-opacity-80 backdrop-filter backdrop-blur-sm text-center " style="background-color: rgba(154, 65, 59, 0.8); border-color: rgb(184, 81, 74);"> 
                ${name}
            </div>
        </div>
    </div>
    `
}