import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Dashboard from './pages/Dashboard';
import AddProperty from './pages/AddProperty';
import Login from './pages/Login';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ViewProperty from './pages/ViewProperty';
import SingleProperty from './pages/SingleProperty';
import UpdateProperty from './pages/UpdateProperty';

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/" element={
            <ProtectedRoute>
              <Layout/>
            </ProtectedRoute>
          }>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='view-property' element={<ViewProperty/>}/>
            <Route path='view-single-property/:id' element={<SingleProperty/>}/>
            <Route path='add-property' element={<AddProperty/>}/>
            <Route path='update-property/:id' element={<UpdateProperty/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;