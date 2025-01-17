import React, { useState } from 'react'
import {Routes , Route , Router} from "react-router-dom"
import Home from './Pages/Home';
import LostCreate from './Pages/LostCreate';
import LostPage from './Pages/LostPage';

const App = () => {
    
  
  return (
   <>
   <Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/create/lost' element={<LostCreate/>}  />
  <Route path='/create/lost/:id' element={<LostPage/>}  />


   </Routes>
   </>
  );
}

export default App;
