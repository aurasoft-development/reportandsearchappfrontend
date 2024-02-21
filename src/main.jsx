// Import necessary React modules and dependencies
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

// Import the main App component
import App from './App.jsx'


// commented to trigger deployement.

// Import the FindProvider context component
import FindProvider from './context/FindContext.jsx'

// Use ReactDOM.createRoot to render the App component within the specified root element
ReactDOM.createRoot(document.getElementById('root')).render(

   // Wrap the entire application in the FindProvider context for state management
  <FindProvider>

    {/* Use BrowserRouter for client-side routing */}
    <BrowserRouter>

    {/* Render the main App component */}
      <App />
    </BrowserRouter>
  </FindProvider>,

)
