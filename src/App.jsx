import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Dashboard from './pages/Dashboard';
import AddProperty from './pages/AddProperty';
import Login from './pages/Login';
import Test from './pages/Test';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='add-property' element={<AddProperty/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;