export const skeletonCard = (target) =>{

    return target.innerHTML = `

<div id="skeleton" class="card-shadow rounded-2xl p-2 h-[200px] sm:h-96">
    <div class="h-full flex flex-col animate-pulse gap-1">
        <div class="bg-gray-300 bg-center h-80 w-full relative overflow-hidden rounded-2xl">
        </div>
        <div class="leading-none p-4 rounded-2xl mt-auto mb-2 text-2xl font-semibold tracking-tight text-white w-full bg-opacity-80 backdrop-filter backdrop-blur-sm bg-gray-300">
        </div>

    </div>
</div>  
  
<div id="skeleton" class="card-shadow rounded-2xl p-2 h-[200px] sm:h-96">
    <div class="h-full flex flex-col animate-pulse gap-1">
        <div class="bg-gray-300 bg-center h-80 w-full relative overflow-hidden rounded-2xl">
        </div>
        <div class="leading-none p-4 rounded-2xl mt-auto mb-2 text-2xl font-semibold tracking-tight text-white w-full bg-opacity-80 backdrop-filter backdrop-blur-sm bg-gray-300">
        </div>

    </div>
</div>  

<div id="skeleton" class="card-shadow rounded-2xl p-2 h-[200px] sm:h-96">
    <div class="h-full flex flex-col animate-pulse gap-1">
        <div class="bg-gray-300 bg-center h-80 w-full relative overflow-hidden rounded-2xl">
        </div>
        <div class="leading-none p-4 rounded-2xl mt-auto mb-2 text-2xl font-semibold tracking-tight text-white w-full bg-opacity-80 backdrop-filter backdrop-blur-sm bg-gray-300">
        </div>

    </div>
</div>  


<div id="skeleton" class="card-shadow rounded-2xl p-2 h-[200px] sm:h-96">
    <div class="h-full flex flex-col animate-pulse gap-1">
        <div class="bg-gray-300 bg-center h-80 w-full relative overflow-hidden rounded-2xl">
        </div>
        <div class="leading-none p-4 rounded-2xl mt-auto mb-2 text-2xl font-semibold tracking-tight text-white w-full bg-opacity-80 backdrop-filter backdrop-blur-sm bg-gray-300">
        </div>

    </div>
</div>
`  
}