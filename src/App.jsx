import React from 'react';
import Test from './components/Test';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      {/* <Test/> */}
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