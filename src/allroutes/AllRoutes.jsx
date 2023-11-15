import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddCategory1 from '../component/form/AddCategory1'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/addcategory1" element={< AddCategory1 />} />

            </Routes>

        </div>
    )
}

export default AllRoutes