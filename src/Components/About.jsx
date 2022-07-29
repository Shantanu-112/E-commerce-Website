import React from 'react';
import Aboutimage from '../image/abut.jpg';
function About() {
  return (
    <div className='about'>
        <div className='about-img'>
            <img src={Aboutimage} alt="img"/>
        </div>
        <div className='about-text'>
            <h3>Our <font> Clothes </font> And <font> Your </font> Confidence <font> Are </font> Synonym <font> In</font> The <font> Parallel</font>Universe</h3>
            <p>Latest trends in apparel, fashion jewelry, bags and watches from top brands Best Deals · Great Offers · Huge Selection · Easy & Fast Delivery Types: Electronics, Clothing & Accessories, Appliances, Books beauty , pet products , jewelry , watch , shoes , computer , laptop , hair , bag. fashion , electronic , house products , nail products , health product , makeup , beauty</p>
            <a href='#' className='about-btn'>Read More</a>
        </div>
    </div>
  )
}

export default About;