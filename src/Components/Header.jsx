import React from 'react';
import Nav from './Nav/Nav';

function Header() {
  return (
    <div className='main'><Nav/>
    <div className='m-text'>
        <h2>Style <font> Trendy</font> Beauty<font> Posh</font> Fashion<font> Model</font></h2>
        <a className='m-btn' href='#'>Products</a>
    </div>
    </div>
  )
}

export default Header;