import React from 'react'
import eclipto_icon from '../assets/eclipto.jpg'

const Discord = () => {
  return (
    <div className='upc '>
      <div className="gradiant"></div>
      <div className="profile-down">
        <img src={eclipto_icon} alt=""/>
        <div className="profile-title text-center">Eclipto Network</div>
        <div className="profile-description text-center">
      Join a vibrant community of like-minded peers!
        </div>
        <div className="profile-button text-center font-semibold"><a href="https://discord.gg/PGC6GJS3FQ">Join the Discord!</a></div>
      </div>
    </div>
  )
}

export default Discord
