// functional component ==============================================================================================================

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import Navbar from "./components/Navbar";
// import Orders from "./components/Orders";
// import Products from "./components/Products";
// import Users from "./components/Users";

// function App() {
//   const [isLogin, setLogin] = useState(false);

//   const loginHandler = () => {
//     setLogin(!isLogin);
//   };

//   return (
//     <>
//       <Router>
//         <Navbar login={loginHandler} status={isLogin} />
//         <Routes>
//           <Route path="/" element={<LoginPage login={loginHandler}/>} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/users" element={<Users />} />
//           <Route
//             path="/login"
//             element={<LoginPage login={loginHandler} />}
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

// class component =============================================================================================================

import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import Orders from "./components/Orders";
import Products from "./components/Products";
import Users from "./components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  loginHandler = () => {
    this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
  };

  render() {
    return (
      <>
        <Router>
          <Navbar login={this.loginHandler} status={this.state.isLogin} />
          <Routes>
            {/* <Route path="/" element={<LoginPage login={this.loginHandler} />} /> */}
            <Route
              path="/"
              element={<LoginPage login={this.loginHandler} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
