import React from 'react';
import Box from './Product box/Box';
import image1 from'../image/fashion-1.jpg';
import image2 from'../image/fashion-2.jpg';
import image3 from'../image/fashion-3.jpg';
import image4 from'../image/fashion-4.jpg';
import image5 from'../image/fashion-5.jpg';
import image6 from'../image/fashion-6.jpg';
import image7 from'../image/fashion-7.jpg';
import image8 from'../image/fashion-8.jpg';
import image9 from'../image/fashion-9.jpg';
import image10 from'../image/fashion-10.jpg';
import image11 from'../image/fashion-11.jpg';
import image12 from'../image/fashion-12.jpg';
import image13 from'../image/fashion-13.jpg';
function Product() {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>New Collections</h3>
        </div>
        <div className='product-container'>
            <Box image={image1} name="Men's Shirt" price="RS.1050"/>
            <Box image={image2} name="Men's Shirt" price="RS.560"/>
            <Box image={image3} name="Men's Shirt" price="RS.1200"/>
            <Box image={image4} name="Saree" price="RS.8250"/>
            <Box image={image5} name="Saree" price="RS.7650"/>
            <Box image={image6} name="Saree" price="RS.1200"/>
            <Box image={image7} name="Top" price="RS.1080"/>
            <Box image={image8} name="Designer Top" price="RS.1800"/>
            <Box image={image9} name="Men's Jeans" price="RS.2100"/>
            <Box image={image10} name="Women's Jeans" price="RS.6550"/>
            <Box image={image11} name="Men's Jeans" price="RS.1950"/>
            <Box image={image12} name="Men's Jeans" price="RS.3550"/>
            <Box image={image13} name="Men's Jeans" price="RS.7250"/>
            
        </div>
    </div>
  )
}

export default Product;