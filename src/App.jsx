// Import necessary React components and styles
import React from 'react';
import './assets/css/App.css';
import AllRoutes from './allroutes/AllRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Import custom components for the application layout
import Header from './component/common/Header';
import Footer from './component/common/FooterDetails';

// Main App component
function App() {
  return (
    <div className='App'>

      {/* Header component */}
      <Header />

      {/* AllRoutes component for managing application routes */}
      <AllRoutes />

      {/* Footer component */}
      <Footer />

       {/* ToastContainer for displaying notifications */}
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

// Export the App component as the default export
export default App
