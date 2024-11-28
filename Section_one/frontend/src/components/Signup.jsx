import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),

  password: Yup.string().required('Please Enter your password')
    .matches(
     "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
});

const Signup = () => {

  const navigate = useNavigate();
  const [avatarPath, setAvatarPath] = useState('');
  const signupForm = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      onSubmit: async (values, action) => {
        values.avatar = avatarPath; // Add avatar path to form values
        console.log('Payload to Backend:', values);  // Ensure avatarPath is included
     
        const res = await fetch('http://localhost:5000/user/add', {
           method: 'POST',
           body: JSON.stringify(values),
           headers: {
              'Content-Type': 'application/json',
           },
        });
     
        if (res.status === 200) {
           Swal.fire({
              icon: 'success',
              title: 'Signup Success',
              text: 'Now Login to continue',
           });
           action.resetForm();
           navigate('/login');
        } else {
           Swal.fire({
              icon: 'error',
              title: 'Oops!',
              text: 'Some Error Occurred',
           });
        }
     },
     
      validationSchema: signupSchema

    });



    const uploadFile = async (e) => {
      let file = e.target.files[0];
   
      const fd = new FormData();
      fd.append('myfile', file);
   
      const res = await fetch('http://localhost:5000/util/uploadfile', {
         method: 'POST',
         body: fd
      });
   
      if (res.status === 200) {
         const data = await res.json();
         setAvatarPath(data.fileName); // Store the original file name
         console.log('File uploaded:', data.fileName);
      }
   
      console.log(res.status);
   };
   


  return (

    <div className='signupbg p-5 mt-5 mb-5 position-relative'>
      <div className="d-flex justify-content-center align-items-center  vh-100  mt-3 ">
        <div className="card w-25 mt-5 shadow-lg rounded-5  ">
          <div className="card-body ">
            <i className="fa-solid fa-lock fa-2x d-block text-center mt-3 " />
            <h5 className="text-center text-dark">Signup</h5>
            <form onSubmit={signupForm.handleSubmit}>
              <div className='m-2'>
                <p className='error-label'>{signupForm.touched.name ? signupForm.errors.name : ''}</p>
                <input className="form-control mb-2 rounded-3" placeholder='Name' type="text" name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
              </div>
              <div className='m-2'>
                <p className='error-label'>{signupForm.touched.email ? signupForm.errors.email : ''}</p>
                <input className="form-control mb-2 rounded-3" placeholder='Email' type="email" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
              </div>
              <div className='m-2'>
                <p className='error-label'>{signupForm.touched.password ? signupForm.errors.password : ''}</p>
                <input className="form-control mb-2 rounded-3" placeholder='Password' type="password" name="password" onChange={signupForm.handleChange} value={signupForm.values.password} />
              </div>

              <div className='m-2'>
                <input type="file" onChange={uploadFile} placeholder='Profile avatar' />
              </div>
              <div>
                <button type='submit' className="btn btn-danger w-100 mt-3 rounded-3 mb-4 ">Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Signup;