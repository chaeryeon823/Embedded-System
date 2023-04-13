// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./New/Main/Mainpage";
import Loginpage from "./New/Login/Loginpage";
import Shotpage from "./New/Shot/Shotpage";
import Rankingpage from "./New/Ranking/Rankingpage";

function App(props) {
  return(
    <BrowserRouter>
      <Routes>
        <Route  index element={<MainPage />}/>
        <Route path="login" element={<Loginpage />}/>
        <Route path="shot" element={<Shotpage />}/>
        <Route path="ranking" element={<Rankingpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;