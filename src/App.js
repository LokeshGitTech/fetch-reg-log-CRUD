import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from './component/Reg'
import Log from './component/Log'

import Crud from './component/Crud';


const App = () => {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={< Reg/>} />
    <Route path='/Log' element={< Log/>} />
    <Route path='/Crud' element={< Crud/>} />
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App