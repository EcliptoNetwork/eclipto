import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
      <p className="card__title font-medium text-m text-center">{text}</p>
      <Link to={link} className="neo-brutalism-orange neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain orange-500"/>
      </Link>
    </div>
  )

const renderContent = {
  3: (
    <div className="absolute bottom-7 left-0 right-0 z-10 flex items-center justify-center text-white font-semibold">

       </div>
    ),
  2: (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white font-semibold">

       </div>
    ),
  1: (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white font-semibold">
    Swipe or use arrow keys/mouse to scroll! 
       </div>
        
    ),
  4: (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center text-white font-semibold">

       </div>
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
