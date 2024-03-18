const sessionCard = document.getElementById('session-card');
const closeSession = document.getElementById('close-session');
const singin = document.getElementById('sign-in');
export const cardSession = (e)=>{
    const tag = e.target.id;
    if(tag == 'sign-in'){
        if(sessionCard.classList.contains('hidden')) sessionCard.classList.remove('hidden');
    }

    if(tag == 'close-session'){
        sessionCard.classList.add('hidden')
    }
};

