import React from 'react'
import '../assets/css/Home.css'
import BasicTabs from '../component/home/Tabs'
// import OtpVarifacation from '../component/home/OtpVarifacation'

const Home = () => {
    return (
        <div className='home_container'>
            <BasicTabs />
            {/* <OtpVarifacation /> */}
        </div>
    )
}

export default Home