import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className="app-wrapper">
        <Header/>
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;