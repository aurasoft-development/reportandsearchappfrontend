import React from 'react';
import './assets/css/App.css';
import AllRoutes from './allroutes/AllRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './component/common/Header';
import Footer from './component/common/FooterDetails';

function App() {
  return (
    <div className='App'>
      <Header />
      <AllRoutes />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
