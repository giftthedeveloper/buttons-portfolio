'use client';

import { CheckCircleRounded } from '@mui/icons-material';
import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion'; 

function ConfirmationButton() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);


  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleButtonClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timeout = setTimeout(() => {
        setClicked(false);
      }, 5000);

      return () => clearTimeout(timeout); 
    }
  }, [clicked]);


  const buttonStyle = {
    color: 'white',
    background: hovered ? '#972A1B' : '#C0392B',
    transition: 'background-color 0.3s',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }} className=" bg-white">
      { clicked ? (
      <div style={{ display: 'flex', alignItems: 'center' }}> 
         <motion.div
          style={{ color: "#26a269", fontSize: "20px" }}
          animate={{ rotate: 360 }} 
          transition={{ duration: 0.3, ease: "easeInOut" }} 
        >
          <CheckCircleRounded style={{ fontSize: "40px" }} /> 
        </motion.div>
        
         <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.0 }} 
          style={{ fontSize: "20px", margin: 0, marginLeft: '8px' }} 
        >Done</motion.p>
      </div>
      ) : (
      <button
        style={buttonStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleButtonClick}
      >Purchase Now
      </button>
      )}
    </div>
  );
}

export default ConfirmationButton;
