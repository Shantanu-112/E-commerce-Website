import React from 'react';

function Nav() {
  return (
    <div>
        <div className='logo'>
            <a href='#'>Fashion Wear</a>
        </div>
        <div className='side-box'>
            <div className='search'>
                <i className='fas fa-search'></i>
                <input placeholder='Search Wearings' type='text'/>
            </div>
        </div>
    </div>
    
  )
}

export default Nav