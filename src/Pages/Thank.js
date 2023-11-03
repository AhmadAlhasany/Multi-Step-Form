import React from 'react'
import './Styles/Thank.css'
function Thank() {
  return (
    <div className='Thank'>
        <img src={process.env.PUBLIC_URL + '/assets/images/icon-thank-you.svg'} alt='Correct'/>
        <h2>Thank you!</h2>
        <p> Thanks for confirming your subscription! We hope you have fun 
        using our platform. If you ever need support, please feel free 
        to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thank