import React from 'react'
import '../assets/css/Home.css'
import BasicTabs from '../component/home/Tabs'

const Home = () => {
    return (
        <div className='home_container'>
            <div className='home_logo'>
                <span >
                    <img src="https://i.pinimg.com/550x/39/6c/d8/396cd8e1d8557f73c786892cffa4f13c.jpg" alt="" style={{height:50}} />
                </span>
                <h1>Search And Find Engine</h1>
            </div>
            {/* <div className='report-heading'>Report</div> */}
            <BasicTabs />
        </div>
    )
}

export default Home