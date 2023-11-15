import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddCategory1 from '../component/form/AddCategory1'
import Bulb from '../component/bulb/Bulb'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/addcategory1" element={< AddCategory1 />} />
                {/* <Route path="/bulb" element={< Bulb />} /> */}
            </Routes>
        </div>
    )
}

export default AllRoutes