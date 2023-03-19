//const URL_API = 'http://localhost:5000/api';
const URL_API = 'https://back-servimainper-production.up.railway.app/api'
const URL_IMG = 'https://res.cloudinary.com/dlvlxxe5t/image/upload/v1675527840/equaldata/no-image_bsdux3.png';

const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
}

const routes = {
    login: '/front-servimainper/login',
    home: '/front-servimainper/',
    payment: '/front-servimainper/payment/:id',
    register: '/front-servimainper/register',
}


export {
    URL_API,
    URL_IMG,
    types,
    routes
}

