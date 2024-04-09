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
    <InfoBox 
    text="From publishing high-quality research to competing in competitions, our initiatives hold many possibilities!"
    link="/initiatives"
    btnText="Visit Our Programs"
  />
    ),
  2: (
    <InfoBox 
    text="Take a look at some of our completed projects!"
    link="/research"
    btnText="See our research"
  />
    ),
  1: (
        <h1 className="text-m sm:leading-snug text-center neo-brutalism-white py-5 px-10 text-white mx-5">
            <span className="font-bold text-xl">ECLIPTO NETWORK</span>
            <br/>
            An organization dedicated to impactful research
        </h1>
        
    ),
  4: (
        <InfoBox 
          text="Introducing the research lifestyle, Eclipto will support you throughout your journey!"
          link="/about"
          btnText="Learn More!"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
