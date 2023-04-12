import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, createClient } from '../../actions/auth'
import './styles.css';
import { disableButton, enableButton, messageError, TabTitle } from '../../utils/GeneralFunctions';
import Footer from '../../components/common/Footer';
import { Roller } from '../../components/common/Roller';
import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const Clients = () => {

   return (

      <>
         <Container>

            <ListGroup variant="flush">
               <ListGroup.Item>Cras justo odio</ListGroup.Item>
               <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
               <ListGroup.Item>Morbi leo risus</ListGroup.Item>
               <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>

         </Container>

         <Footer />



      </>

   )
}

export default Clients;