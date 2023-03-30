import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../actions/auth'
import { routes } from '../../../config/constant';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Footer = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
                    <Link className='blogItem-link' to={routes.home}>
                        <b>Home</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </Link>
                    <Link className='blogItem-link' to={routes.register}>
                        <b>Register</b>
                    </Link>
                </p>

                <div className="footer-menu">
                    <ul className="f-menu">

                        <li onClick={handleLogout}><a href=''><b>Logout</b></a></li>

                    </ul>
                </div>
            </div>

        </footer>

    )
}

export default Footer;