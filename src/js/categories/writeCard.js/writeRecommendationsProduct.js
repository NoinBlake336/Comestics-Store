export const renderItemsRecommendations = (data,quantityTarget) =>{
    const {api_featured_image,name,id} = data;
    return `
    <li id="${id}" class="w-[12rem] rounded-lg p-2 absolute">
        <div class="card-shadow rounded-2xl p-0 bg-cover bg-center h-[180px] relative overflow-hidden w-[200] inset-x-[${(180*quantityTarget)}px] md:w-full " style="background-image: url(&quot;${api_featured_image};);">
            <div class="absolute inset-0" style="background-image: linear-gradient(transparent 0%, rgb(128, 57, 52) 100%);">
                <div class="h-full flex">
                    <div class="leading-none p-6 rounded-2xl mt-auto mb-2 text-lg font-semibold drop-shadow-sm tracking-tight" style="color: rgb(252, 244, 244);"> 
                        ${name}
                    </div>
                </div>
            </div>
        </div>
    </li>        
    `
}