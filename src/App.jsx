import React from 'react';
import './assets/css/App.css';
import AllRoutes from './allroutes/AllRoutes';
import Payment from './component/common/Payment';
import Bulb from './component/common/Bulb';

function App() {
  return (
    <div className='App'>
      <AllRoutes />
      {/* <Bulb /> */}
      {/* <Payment /> */}
    </div>
  )
}

export default App
