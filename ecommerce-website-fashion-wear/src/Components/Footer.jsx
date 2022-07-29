import React from 'react';

function Footer() {
  return (
    <div className='Subscribe-container'>
        <h3>Do Follow Us On Social Handles</h3>
        <div className='Subscribe-input'>
            <input placeholder='example@gmail.com' type='email'/>
            <a className='Subscribe-btn' href='#'>Send</a>
        </div>
    </div>
  )
}

export default Footer;