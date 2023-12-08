// Importing React and necessary components for routing
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Payment from '../component/common/Payment'
import AllDetails from '../component/common/AllDetails'
import OtpVarifacation from '../component/home/OtpVarifacation'
import CategoryDetails from '../component/view_details/CategoryDetails'
import Footer from '../component/common/FooterDetails'

import HomePage from '../component/common/HomePage'
import AllCategory from '../component/common/AllCategory'
// Component to define all routes using React Router's Routes and Route
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                {/* route redirect to a page */}
                <Route path='/' element={<HomePage />} />
                <Route path="/payment" element={< Payment />} />
                <Route path="/alldetails/" element={< AllDetails />} />
                <Route path="/otpverification" element={<OtpVarifacation />} />
                <Route path="/category_details" element={<CategoryDetails />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='/allcategory' element={ <AllCategory /> } />
                <Route path="/search" element={< Home />} />
            </Routes>
        </div>
    )
}

// Exporting the AllRoutes component
export default AllRoutes