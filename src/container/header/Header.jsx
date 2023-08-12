import React, { useState } from 'react';
import './header.css'
import Icon1 from '../../assets/Icon1.svg';
import Icon2 from '../../assets/Icon2.png';
import Icon3 from '../../assets/Icon3.png';
import Icon4 from '../../assets/Icon4.png';
import Icon5 from '../../assets/Icon5.png';
import Features from '../../components/feature/Features';
const Header =() => {
    return(
        <>
        <div className='feature_header'>Access curated courses worth ₹ 18500 at just ₹ 99 per year!</div>
        <div  className='feature_content'>
          <Features
            imageSrc={Icon1}
            text="100+ Job relevant courses"
         />

         <Features
           imageSrc={Icon2}
           text="20,000+ hours of content"/>

           <Features
           imageSrc={Icon3}
           text="Exclusive webinar access"/>

           <Features
           imageSrc={Icon4}
           text="Scholarship worth ₹94,500  "/>

           <Features
           imageSrc={Icon5}
           text="Ad Free learning experience"/>
          </div>
          
        </>
  
          
        
    )
}

export default Header