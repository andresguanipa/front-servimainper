import { types, URL_IMG } from '../config/constant';
import axios from '../config/axios';
import Swal from 'sweetalert2';
import { store } from '../store/store'
import { messageError } from '../utils/GeneralFunctions';


export const login = (id, username, firstname, img, token) => ({
    type: types.login,
    payload: {
        id,
        username,
        firstname,
        img,
        token
    }

})

export const changeName = (name) => {

    const user = store.getState().auth

    return {
        type: types.login,
        payload: {
            ...user,
            firstname: name
        }
    }
}

export const loginUserPassword = (username, password) => {

    return (dispatch) => {

        axios.post('/user/login', { username, password })
            .then(res => {

                if (!res.data.ok) {

                    messageError(res.data.message);

                } else {

                    dispatch(login(res.data.usuario.id, res.data.usuario.username, res.data.usuario.name, res.data.usuario.img, res.data.token));
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('name', res.data.usuario.name)

                    window.location.href = '/';

                }


            }).catch(err => {
                console.log(err);
                messageError('Ocurrio un error, por favor vuelva a intentarlo mas tarde');

            })

    }

}

export const signUp = (data) => {

    return (dispatch) => {

        axios.post('/user/signup',
            {
                username: data.username,
                password: data.userPassword,
                name: data.name,
                img: URL_IMG,
            }
        ).then(res => {

            if (!res.data.ok) {

                messageError(res.data.message);


            } else {

                Swal.fire({
                    icon: 'success',
                    title: 'Great!',
                    text: 'The user has been successfully created!',
                    footer: 'SERVIMAINPER © 2023 - All rights reserved',
                }).then(data => {

                    window.location.href = '/';

                });

            }

        }).catch(err => {

            messageError('An error occurred, please try again later.');

        })

    }

}

export const createClient = (data) => {

    return (dispatch) => {

        axios.post('/client',
            {
                dni: data.dni,
                name: data.name,
                lastname: data.lastname,
                phone: data.phone,
                email: data.email
            }
        ).then(res => {

            if (!res.data.ok) {

                messageError(res.data.message);


            } else {

                Swal.fire({
                    icon: 'success',
                    title: 'Great!',
                    text: 'The client has been successfully created!',
                    footer: 'SERVIMAINPER © 2023 - All rights reserved',
                }).then(data => {

                    window.location.href = '/';

                });

            }

        }).catch(err => {

            messageError('An error occurred, please try again later.');

        })

    }

}

export const startLogout = () => {
    return async (dispatch) => {
        localStorage.setItem('token', '');
        localStorage.setItem('name', '');
        dispatch(logout());

    }
}


export const logout = () => ({
    type: types.logout
})

/* export const createUser = (user) => {

    return (dispatch) => {

        axios.post('/user/signup',
            { 
            
            }
        )
            .then(data => {

                if (data.data.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Genial!',
                        text: 'El nombre ha sido cambiado exitosamente',
                        footer: 'Copyright © 2023 - Todos los derechos reservados',
                    }).then(data => {

                        window.location.href = '/';

                    });

                } else {

                    messageError(data.data.message);

                }

            }).catch(err => {

                messageError('Ha ocurrido un error, por favor vuelve a intentarlo más tarde');

            });

    }

} */
