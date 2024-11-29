

// import React from "react";
// import { NavLink } from "react-router-dom";
// import useUserContext from "../UserContext";
// import { useCart } from "../contexts/CartContext";

// const Navbar = () => {
//   const { loggedIn, logout } = useUserContext();
//   const { cart } = useCart();

//   const currentUser = JSON.parse(sessionStorage.getItem("user"));
 
//   const showLogInOption = () => {
//     if (loggedIn) {
//       return (
//         <>
//           <li className="px-1 py-0 my-0">
//             <img
//               width={60}
//               height={50}
//               className="ms-2 rounded-circle"
//               src={"http://localhost:5000/" + currentUser.avatar}

//               alt=""
//             />
//           </li>
          
        
//           <li>
//             <h6 className="px-1 py-2 my-0 text-success">{currentUser.name}</h6>
//           </li>
//           <li className="px-4 py-1 my-0 ">
//             <button onClick={logout} className="btn btn-danger text-center ">
//               Log Out
//             </button>
//           </li>
//         </>
//       );
//     } else {
//       return (
//         <div className="mx-4">
//           <ul className="navbar-nav d-flex flex-row mx-3">
//             <li className="nav-item dropdown">
//               <button
//                 className="nav-link btn"
//                 id="navbarDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <i className="fa-solid fa-user-tie fs-4" />
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item text-dark" href="/login">
//                     Login
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item text-dark" href="/signup">
//                     Register
//                   </a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       );
//     }
//   };

//   return (
//     <div style={{ marginBottom: "7rem" }}>
//       <nav className="navbar navbar-expand-lg bg-light border border-1 fixed-top p-2">
//         <div className="container-fluid">
//           <a className="navbar-brand mx-2 p-0" href="/home">
//             <img
//               height={100}
//               width={100}
//               src="https://head-held-high.org/wp-content/uploads/2021/03/craftizen-logo-300x300.jpg"
//               alt=""
//             />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto my-1 mb-lg-0 mx-3 navbar-nav-scroll">

//               <li className="nav-item nav-item dropdown mx-1">
//                 <NavLink className="nav-link fw-bold text-dark" to="/addproduct">
//                   ADD PRODUCTS
//                 </NavLink>
//               </li>
//               <li className="nav-item mx-1">
//                 <NavLink className="nav-link fw-bold text-dark" to="/browse">
//                   BROWSE ALL
//                 </NavLink>
//               </li>
//               {showLogInOption()}
//             </ul>
//             <div className="mx-4">
//               <ul className="navbar-nav d-flex flex-row mx-3">
//                 <li className="nav-item me-3 me-lg-0 mx-3">
//                   <a className="nav-link p-3" href="#!">
//                     <i className="fas fa-heart fs-5" />
//                   </a>
//                 </li>
//                 <li className="nav-item me-3 me-lg-0 mx-3">
//                   <a className="nav-link p-3" href="/cart">
//                     <i className="fas fa-shopping-cart fs-5" />
//                     <span className="badge bg-danger rounded-pill">
//                       {cart.length}
//                     </span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../UserContext";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();
  const { cart } = useCart();

  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  const showLogInOption = () => {
    if (loggedIn) {
      return (
        <>
          <li className="px-1 py-0 my-0">
            <img
              width={60}
              height={50}
              className="ms-2 rounded-circle"
              src={"http://localhost:5000/" + currentUser.avatar}
              alt=""
            />
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <h6 className="px-1 py-2 my-0 text-success">{currentUser.name}</h6>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink className="dropdown-item" to="/manageuser">
                  Edit Profile
                </NavLink>
              </li>
              <li>
                <button onClick={logout} className="dropdown-item">
                  Log Out
                </button>
              </li>
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <div className="mx-4">
          <ul className="navbar-nav d-flex flex-row mx-3">
            <li className="nav-item dropdown">
              <button
                className="nav-link btn"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user-tie fs-4" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item text-dark" href="/login">
                    Login
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-dark" href="/signup">
                    Register
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div style={{ marginBottom: "7rem" }}>
      <nav className="navbar navbar-expand-lg bg-light border border-1 fixed-top p-2">
        <div className="container-fluid">
          <a className="navbar-brand mx-2 p-0" href="/home">
            <img
              height={100}
              width={100}
              src="https://head-held-high.org/wp-content/uploads/2021/03/craftizen-logo-300x300.jpg"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto my-1 mb-lg-0 mx-3 navbar-nav-scroll">
              <li className="nav-item nav-item dropdown mx-1">
                <NavLink className="nav-link fw-bold text-dark" to="/addproduct">
                  ADD PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item mx-1">
                <NavLink className="nav-link fw-bold text-dark" to="/browse">
                  BROWSE ALL
                </NavLink>
              </li>
              {showLogInOption()}
            </ul>
            <div className="mx-4">
              <ul className="navbar-nav d-flex flex-row mx-3">
                <li className="nav-item me-3 me-lg-0 mx-3">
                  <a className="nav-link p-3" href="#!">
                    <i className="fas fa-heart fs-5" />
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-0 mx-3">
                  <a className="nav-link p-3" href="/cart">
                    <i className="fas fa-shopping-cart fs-5" />
                    <span className="badge bg-danger rounded-pill">
                      {cart.length}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;