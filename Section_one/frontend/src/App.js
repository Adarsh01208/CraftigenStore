import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddProduct from './components/AddProduct';
import { UserProvider } from './UserContext';
import Browse from './components/Browse';
import ManageUser from './components/ManageUser';
import ContactUs from './components/ContactUs';
import UpdateUser from './components/UpdateUser';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Toaster position='top-center' />
      <BrowserRouter>
        <UserProvider>
          {/* <Link to="/home">Home Page</Link>
        <Link to="/login">Login Page</Link>
        <Link to="/signup"> Signup Page</Link>
        <Link to="/signin">Signin Page</Link> */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='browse' element={<Browse />} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path='manageuser' element={<ManageUser />} />
            <Route path='updateuser/:id' element={<UpdateUser />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
