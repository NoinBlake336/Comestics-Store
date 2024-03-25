const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

export const fetchProducts = async ()=>{
    const res = await fetch(URL);
    const data = await res.json();

    return data;
};


