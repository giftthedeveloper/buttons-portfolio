'use client';
import React, { useState } from 'react'

function LearnMoreButton() {
    const [backgroundColor, setBackgroundColor] = useState("#e8e8e8");
    const [isHovered, setIsHovered] = useState(false);

    const toggleBackground = () => {
        setBackgroundColor((prevColor) =>
          prevColor === "#e8e8e8" ? "#212121" : "#e8e8e8"
        );
      };

      const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

     return (
        <div style={{ position: "relative", backgroundColor, minHeight: "50vh", transition: "background-color 0.5s" }}>
            <button
                className="absolute top-10 right-10 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md shadow-md cursor-pointer"
                onClick={toggleBackground}>
                Try Me
            </button>

            <button
                className="absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-6 text-white font-semibold rounded-md cursor-pointer"
                style={{
                    // background: "rgb(96,9,240)",
                    background: "linear-gradient(0deg, rgba(96,9,240,1) 0%, rgba(129,5,240,1) 100%)",
                    boxShadow: isHovered
                    ? "4px 4px 6px 0 rgba(255,255,255,.5), -4px -4px 6px 0 rgba(116, 125, 136, .5), inset -4px -4px 6px 0 rgba(255,255,255,.2), inset 4px 4px 6px 0 rgba(0, 0, 0, .4)"
                    : "inset 2px 2px 2px 0px rgba(255,255,255,.5), 7px 7px 20px 0px rgba(0,0,0,.1), 4px 4px 5px 0px rgba(0,0,0,.1)",
                    transition: "box-shadow 0.5s" 
                               }}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
    >
                Learn More
            </button>
        </div>


  );
}

export default LearnMoreButton
