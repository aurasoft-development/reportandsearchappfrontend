import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddCategory1 from '../component/form/AddCategory1'
import Bulb from '../component/common/Bulb'
import Payment from '../component/common/Payment'
import AllDetails from '../component/common/AllDetails'
import OtpVarifacation from '../component/home/OtpVarifacation'
import CategoryDetails from '../component/view_details/CategoryDetails'
import Footer from '../component/common/FooterDetails'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/addcategory1" element={< AddCategory1 />} />
                <Route path="/bulb" element={< Bulb />} /> 
                <Route path="/payment" element={< Payment />} />
                <Route path="/alldetails" element={< AllDetails />} />
                <Route path="/otpverification" element={<OtpVarifacation />} />
                <Route path="/category_details" element={<CategoryDetails />} />
                <Route path='/footer' element={<Footer />} />
            </Routes> 
        </div>
    )
}

export default AllRoutes