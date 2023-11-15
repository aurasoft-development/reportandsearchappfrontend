import React from 'react'
import '../assets/css/Home.css'
import BasicTabs from '../component/home/Tabs'
// import OtpVarifacation from '../component/home/OtpVarifacation'

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_logo'>
                <span>Logo</span>
                <h1>Search and Find application</h1>
            </div>
            <div className='report-heading'>Report</div>
            <BasicTabs />
            {/* <OtpVarifacation /> */}
        </div>
    )
}

export default Home