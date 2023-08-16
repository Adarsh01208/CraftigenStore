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
import ListProduct from './components/ListProduct';
import UserAuth from './UserAuth';

function App() {
  return (
    <div>
      <Toaster position='top-center' />
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='addproduct' element={<UserAuth> <AddProduct /> </UserAuth>} />
            <Route path='browse' element={<UserAuth>  <Browse /></UserAuth>} />
            <Route path='contactus' element={<UserAuth> <ContactUs /> </UserAuth>} />
            <Route path='manageuser' element={<UserAuth> <ManageUser /></UserAuth>} />
            <Route path='updateuser/:id' element={<UserAuth><UpdateUser /> </UserAuth>} />
            <Route path='productlist' element={<UserAuth><ListProduct /> </UserAuth>} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
