import React from 'react';
import './assets/css/App.css';
import AllRoutes from './allroutes/AllRoutes';
import Payment from './component/common/Payment';
import Bulb from './component/common/Bulb';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <AllRoutes />
      {/* <Bulb /> */}
      {/* <Payment /> */}
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
