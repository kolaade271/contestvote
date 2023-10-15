import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./page/login";
import Contest from './page/contest';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       {/* <Route path="/" element={<SignUp/>} /> */}
       <Route path="/:id" element={<Contest/>} />
            </Routes>
            </BrowserRouter>

      </div>
    
    
    
  );
}
export default App
