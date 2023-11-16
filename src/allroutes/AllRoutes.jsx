import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import OtpVarifacation from '../component/home/OtpVarifacation'
import CategoryDetails from '../component/view_details/CategoryDetails'
// import AddCategory1 from '../component/form/AddCategory1'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/otpverification" element={<OtpVarifacation />} />
                <Route path="/category_details" element={<CategoryDetails />} />

            </Routes>

        </div>
    )
}

export default AllRoutes