import React, { Fragment } from 'react'
import Header from '../../common/header/Header'
import Footer from '../../common/footer/Footer'
import "./Dashboard.scss"
const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Header/>
            <h1>E - Dashboard</h1>
        <Footer/>
    </div>
  )
}

export default Dashboard