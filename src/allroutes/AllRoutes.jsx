import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddCategory1 from '../component/form/AddCategory1'
import Bulb from '../component/common/Bulb'
import Payment from '../component/common/Payment'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/addcategory1" element={< AddCategory1 />} />
                <Route path="/bulb" element={< Bulb />} /> 
                <Route path="/payment" element={< Payment />} />

            </Routes> 
        </div>
    )
}

export default AllRoutes