import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-transparent w-88 h-88 [perspective:1000px] ]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* (Front) */}
        <div className="absolute w-full h-full rounded-xl shadow-lg border-2 border-[rgba(54,137,177,1)] bg-white [backface-visibility:hidden]">
          {frontContent}
        </div>
        
        {/*  (Back) */}
        <div className="absolute w-full h-full rounded-xl shadow-lg border-2 border-[rgba(54,137,177,1)] bg-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backContent}
        </div>
      </div>
    </div>
  );
}; 

export default FlipCard; 