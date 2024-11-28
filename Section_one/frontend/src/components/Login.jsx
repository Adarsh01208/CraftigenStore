import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import useUserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';


const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string().required('Password is required')


});
const Login = () => {
  

  const navigate = useNavigate();


   const {setLoggedIn}  = useUserContext();

  //initialization formik
  const loginForm = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: async (values, action) => {
        console.log(values);

        const res = await fetch('http://localhost:5000/user/authenicate', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res.status);
        action.resetForm();

        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
          });    
          navigate('/home');

          const data = await res.json();
          sessionStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);

        }
        else if (res.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Email Nd Password is inCorrect'
          });
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong'
          });
        }

      },
      validationSchema: LoginSchema
    });
  return (
    <div className='loginbg mt-5 '>
      <div className="d-flex justify-content-center align-items-center  vh-100 ">
        <div className="card w-25 shadow-lg rounded-5   ">
          <div className="card-body  p-5 ">
            <i className="fa-solid fa-lock fa-2x d-block text-center " />
            <h4 className="text-center my-4  ">Login Form</h4>
            <form onSubmit={loginForm.handleSubmit} >
              
              <p className='error-label '>{loginForm.touched.email ? loginForm.errors.email : ''}</p>
              <input className="form-control mb-4 rounded-3" placeholder='Email' type="email" name="email" onChange={loginForm.handleChange} value={loginForm.values.email} />

          
              <p className='error-label ' >{loginForm.touched.password ? loginForm.errors.password : ''}</p>
              <input className="form-control mb-4 rounded-3" placeholder='Password' type=" password" name="password" onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button type="submit" className="btn btn-danger w-100 mt-2 rounded-3 ">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;