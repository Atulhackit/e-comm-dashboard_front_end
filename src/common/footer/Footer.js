import React from 'react'
import "./Footer.scss"
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='footerContainer'>
      <p>All Rights Are Reserved &#169; {currentYear}</p>
    </div>
  )
}

export default Footer