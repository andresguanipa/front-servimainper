import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../actions/auth'
import { routes } from '../../../config/constant';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Footer = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    useEffect(() => {
        console.log(window.location.pathname);
    }, [])


    return (

        <footer className='footer'>

            <div className="footer-content">
                <h3>SERVICES AND MAINTENANCE PEROZO LLC</h3>
                <p>© 2023. All Rights Reserved</p>
            </div>
            <div className="footer-bottom">
                <p>
                    <Link className='blogItem-link' to={routes.home}>
                        <b>Home</b>&nbsp; &nbsp; &nbsp; &nbsp; 
                    </Link>
                    <Link className='blogItem-link' to={routes.register}>
                        <b>Register</b>&nbsp; &nbsp; &nbsp; &nbsp;
                    </Link>
                    {/* <Link className='blogItem-link' to={routes.clients}>
                        <b>Clients</b>
                    </Link> */}
                </p>

                {
                    window.location.pathname != '/register' ?

                        <div className="footer-menu">
                            <ul className="f-menu">

                                <li onClick={handleLogout}><a href=''><b>Logout</b></a></li>

                            </ul>
                        </div>

                        :

                        <></>

                }

            </div>

        </footer>

    )
}

export default Footer;