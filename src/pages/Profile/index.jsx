import React, { useEffect, useState } from 'react';
import axios from '../../config/axios';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, createClient } from '../../actions/auth'
import './styles.css';
import { disableButton, enableButton, messageError, TabTitle } from '../../utils/GeneralFunctions';
import Footer from '../../components/common/Footer';

const Profile = () => {

   const dispatch = useDispatch();
   const state = useSelector(state => state);

   const formUser = {
      name: '',
      username: '',
      userPassword: '',
      userNewPassword: ''

   }

   const formPassword = {
      currentPassword: '',
      newPassword: '',
      repeatNewPassword: '',
   }

   const formClient = {
      dni: '',
      name: '',
      lastname: '',
      phone: '',
      email: ''
   }

   const [formData1, setFormDataUser] = useState(formUser);
   const [formData2, setFormDataPassword] = useState(formPassword);
   const [formData3, setFormDataClient] = useState(formClient);
   const [category, setCategory] = useState("1");

   const handleChangeUser = (e) => {

      setFormDataUser({
         ...formData1,
         [e.target.name]: e.target.value
      })
   }

   const handleChangePassword = (e) => {

      setFormDataPassword({
         ...formData2,
         [e.target.name]: e.target.value
      });
   }

   const handleChangeClient = (e) => {

      setFormDataClient({
         ...formData3,
         [e.target.name]: e.target.value
      });
   }



   const handleChangeCategory = (e) => {
      setCategory(e.target.value);
   }

   useEffect(() => {

      TabTitle(`Register`);

   }, [])


   const onSubmitForm = (e) => {
      e.preventDefault();
      disableButton();

      if (category === "1") {


         if (formData1.name !== "" && formData1.username !== "" && formData1.password !== "" && formData1.userNewPassword !== "") {
            if (formData1.userPassword === formData1.userNewPassword && formData1.userPassword.length >= 6) {

               dispatch(signUp(formData1));

            } else {

               messageError('Passwords must match and contain more than 6 characters!');

            }

         } else {

            messageError('Please, fill up all fields');

         }

      } else if (category === "2") {

         if (formData2.currentPassword === '' || formData2.newPassword === '' || formData2.repeatNewPassword === '') {

            messageError('Por favor, llene todos los campos.');

         } else {

            if (formData2.newPassword !== formData2.repeatNewPassword || formData2.newPassword.length < 6) {

               messageError('Las contraseñas deben coincidir y ser mayor a 5 caracteres');

            } else {

               axios.put('/user/password',
                  {
                     newPassword: formData2.newPassword,
                     password: formData2.currentPassword
                  }
               ).then(data => {

                  if (data.data.ok) {
                     Swal.fire({
                        icon: 'success',
                        title: 'Great!',
                        text: 'Your password have been changed successfully',
                        footer: 'SERVIMAINPER © 2023 - Todos los derechos reservados',
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

         }

      } else {

         if (formData3.name !== "" && formData3.lastname !== "" && formData3.phone !== "" && formData3.email !== "" && formData3.dni !== "") {

            dispatch(createClient(formData3));

         } else {

            messageError('Please, fill up all fields');

         }


      }

      enableButton();

   }

   return (

      <>
         <div className='profile'>
            <div className="wrapper">
               <div className="title">
                  Actions
               </div>

               <div className="field prof-image">
                  <img className='profile-image' src={state.auth.img} height={200} width={200} alt='profile' ></img>
               </div>

               <br />
               <br />

               <div className="select">
                  <label className='question'>What do you wanna do?</label>
                  <select name="category" className='feedback-input-profile' onChange={handleChangeCategory} required>
                     <option value="1" defaultValue>Register a new user</option>
                     <option value="2">Change password</option>
                     <option value="3">Register a costumer</option>
                  </select>
               </div>

               <br />
               <hr />
               <br />

               <form onSubmit={onSubmitForm}>

                  {

                     category === "1" ?

                        <>
                           <div className="field">
                              <input type="text" name="name" onChange={handleChangeUser} value={formData1.name} required></input>
                              <label>Name</label>
                           </div>

                           <div className="field">
                              <input type="text" name="username" onChange={handleChangeUser} value={formData1.username} required></input>
                              <label>Username</label>
                           </div>

                           <div className="field">
                              <input type="password" name="userPassword" onChange={handleChangeUser} value={formData1.userPassword} required></input>
                              <label>Password</label>
                           </div>

                           <div className="field">
                              <input type="password" name="userNewPassword" onChange={handleChangeUser} value={formData1.userNewPassword} required></input>
                              <label>Repeat Password</label>
                           </div>
                           <br />

                           <div className="field">
                              <input type="submit" value="Register" id='submit-button'></input>
                           </div>
                           <br />
                        </>

                        :
                        (

                           category === "2" ?

                              <>
                                 <div className="field">
                                    <input type="password" name="currentPassword" onChange={handleChangePassword} value={formData2.currentPassword} autoComplete="on" required></input>
                                    <label>Current password</label>
                                 </div>

                                 <div className="field">
                                    <input type="password" name="newPassword" onChange={handleChangePassword} value={formData2.newPassword} autoComplete="on" required></input>
                                    <label>New Password</label>
                                 </div>

                                 <div className="field">
                                    <input type="password" name="repeatNewPassword" onChange={handleChangePassword} value={formData2.repeatNewPassword} autoComplete="on" required></input>
                                    <label>Repeat new password</label>
                                 </div>
                                 <br />

                                 <div className="field">
                                    <input type="submit" value="Change password" id='submit-button'></input>
                                 </div>
                                 <br />

                              </>

                              :

                              <>
                                 <div className="field">
                                    <input type="text" name="dni" onChange={handleChangeClient} value={formData3.dni} autoComplete="on" required></input>
                                    <label>Invoice #</label>
                                 </div>

                                 <div className="field">
                                    <input type="text" name="name" onChange={handleChangeClient} value={formData3.name} autoComplete="on" required></input>
                                    <label>Name</label>
                                 </div>

                                 <div className="field">
                                    <input type="text" name="lastname" onChange={handleChangeClient} value={formData3.lastname} autoComplete="on" required></input>
                                    <label>Lastname</label>
                                 </div>

                                 <div className="field">
                                    <input type="text" name="phone" onChange={handleChangeClient} value={formData3.phone} autoComplete="on" required></input>
                                    <label>Phone</label>
                                 </div>

                                 <div className="field">
                                    <input type="text" name="email" onChange={handleChangeClient} value={formData3.email} autoComplete="on" required></input>
                                    <label>E-mail</label>
                                 </div>
                                 <br />

                                 <div className="field">
                                    <input type="submit" value="Register" id='submit-button'></input>
                                 </div>
                                 <br />

                              </>

                        )



                  }


               </form>
            </div>
         </div>



         <Footer />



      </>

   )
}

export default Profile;