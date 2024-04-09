import React from 'react'
import Card from '../components/Card.jsx'
import Card2 from '../components/Card2.jsx'
import Discord from '../components/Discord.jsx'


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
     <span className="blue-gradient_text font-semibold drop-shadow">What We Offer</span>
      
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>Here at Eclipto, we prioritize forming a community of passionate middle/high 
          schoolers. Within this community, we aim to empower these students to conduct
          and publish their own unique research projects.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-orange-200">Research Pathways</h3>
      </div>
      <Card/>
      <div className="py-10 fllex flex-col">
        <h3 className="subhead-text text-orange-200">Publishing Pathways</h3>
        </div>
      <Card2/>
      <div className="py-10 flex flex-col">
      <span className="orange-gradient_text font-semibold drop-shadow subhead-text">Join a Growing Community!</span>
      </div>
      <Discord/> 
      
      </section>
  )

}

export default About
