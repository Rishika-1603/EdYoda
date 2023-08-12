import React from 'react';
import './feature.css';
const Features = (props) => {
  return (
    <div className='feature_content'>
      <img className='feature__content_image'src={props.imageSrc} alt="Image" />
      <p className='feature__content_text'>{props.text}</p>
    </div>
  );
};

export default Features;