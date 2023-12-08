// Import React for creating React components
import React from 'react'

// Import the CSS file for styling
import '../assets/css/Home.css'

// Import the BasicTabs component for the home page
import BasicTabs from '../component/home/Tabs'

// Functional component for the Home page
const Home = () => {
    return (

        // Main container for the home page with the 'home_container' class
        <div >
            {/* Render the BasicTabs component for organizing content in tabs */}
            <BasicTabs />
        </div>
    )
}

// Export the Home component as the default export
export default Home