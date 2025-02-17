import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Dashboard from './pages/Dashboard';
import AddProperty from './pages/AddProperty';

const App = () => {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='add-property' element={<AddProperty/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;