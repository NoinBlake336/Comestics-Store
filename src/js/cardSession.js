import { config } from "./config/index.config.js";



export const cardSession = (e)=>{
    const tag = e.target.id;
    if(tag == 'sign-in'){
        if(config.sessionCard.classList.contains('hidden')) config.sessionCard.classList.remove('hidden');
    }

    if(tag == 'close-session'){
        config.sessionCard.classList.add('hidden')
    }
};

