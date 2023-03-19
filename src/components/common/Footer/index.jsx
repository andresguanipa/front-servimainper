import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../actions/auth'
import { routes } from '../../../config/routes';
import './styles.css';

const Footer = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }


    return (

        <footer className='footer'>

            <div className="footer-content">
                <h3>SERVICES AND MAINTENANCE PEROZO LLC</h3>
                <p>© 2023. All Rights Reserved</p>
            </div>
            <div className="footer-bottom">
                <p>
                    <a href={routes.home}><b>Home</b></a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <a href={routes.register}><b>Register</b></a>
                </p>

                <div className="footer-menu">
                    <ul className="f-menu">

                        <li onClick={handleLogout}><a href=""><b>Logout</b></a></li>

                    </ul>
                </div>
            </div>

        </footer>

    )
}

export default Footer;