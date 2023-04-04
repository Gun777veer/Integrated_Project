import './App.css';
import NB from './components/NavBar';
import  Home  from './components/Home';
import  Login  from './components/LogIn';
import  SignUp  from './components/SignUp';
import Colleges from './components/Colleges';
import Jobs from './components/Jobs';

  import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import React from "react";
import About from './components/About';
import ForgetPass from './components/ForgetPass';

function App() {
  return (
    <div className="App">
      <Router>
            <NB></NB>
            <Routes>
            <Route path="/" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/Signup' element={<SignUp></SignUp>}></Route>
              <Route path='/colleges' element={<Colleges></Colleges>}></Route>
              <Route path='/jobs' element={<Jobs></Jobs>}></Route>
              <Route path='/forget-password' element={<ForgetPass></ForgetPass>}></Route>
            </Routes>
            </Router>
    </div>
  );
}

export default App;
