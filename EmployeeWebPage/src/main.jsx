import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './users/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/login.jsx'
import Add from './admin/addData.jsx';
import Update from './admin/editData.jsx';
import Employee from './users/employee.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Home from './admin/home.jsx';
import Explore from './admin/explore.jsx';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/addData' element={<Add />} />
        <Route path='/editData/:id/:name/:phonenumber/:birthday/:address' element={<Update />} />
        <Route path='/about' element={<About />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/home' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
