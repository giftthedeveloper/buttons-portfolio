'use client';


import { PersonRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

function SocialButtons() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const handleMouseOver = (buttonIndex) => {
    setHoveredButton(buttonIndex);
  };

  const handleMouseOut = () => {
    setHoveredButton(null);
  };

  const handleClick = (buttonIndex) => {
    setClickedButton(buttonIndex);
  };

  const buttons = [
    { text: "Socials" },
    { text: "Twitter" },
    { text: "LinkedIn" },
    { text: "Instagram" }
  ];

  return (
    <div style={{minHeight: "50vh", background: "#212121", display: "flex", justifyContent: "center", alignItems: "center"}}>
      {buttons.map((button, index) => (
        <div key={index} className='mr-4' style={{ zIndex: index === 0 || clickedButton === index ? 2 : 1 }}>
          <motion.button 
            style={{ 
              background: hoveredButton === index || clickedButton === index ? '#fcfcfc' : '#3f4144', 
              color: hoveredButton === index || clickedButton === index ? "#3f4144" : "#fcfcfcfc",
              position: clickedButton === index ? "relative" : "static",
              marginLeft: clickedButton === index ? `${index * 10}px` : "0",
            }} 
            className='py-3 px-6 rounded-3xl'
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(index)}
            initial={{ x: index === 0 ? 0 : -190 * index }} // Initial position
            animate={{ x: 0 }} // Animation to move to the final position
          >
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", }}>
              <PersonRounded />
              <span style={{textDecoration: hoveredButton === index ? "underline" : "none", marginLeft: "4px"}}>
                {button.text}
              </span>
            </div>
          </motion.button>
        </div>
      ))}
    </div>
  )
}

export default SocialButtons;
