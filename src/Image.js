import React from 'react';
import './App.css';

function Image({productImage,productName}) {
  return <img src={productImage} alt={productName} className="img100"/>;
}

export default Image;