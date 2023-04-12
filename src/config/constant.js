//const URL_API = 'http://localhost:5000/api';
const URL_API = 'https://servimainper-back-production.up.railway.app/api'
const URL_IMG = 'https://res.cloudinary.com/dlvlxxe5t/image/upload/v1675527840/equaldata/no-image_bsdux3.png';

const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',
}

const routes = {
    login: '/login',
    home: '/',
    payment: '/payment/:id',
    register: '/register',
    clients: '/clients',
    notFound: '/*',
}

export {
    URL_API,
    URL_IMG,
    types,
    routes
}

