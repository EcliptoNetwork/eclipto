import { useState } from "react";
import React from 'react'

const Card = () => {
    const [cards] = useState([
        {
            title: 'Research Fundementals',
            text: `Not sure where to start? No worries! We have groups dedicated to topic picking and learning fundemental research skills!`
        },
        {
            title: 'Individual Research',
            text: `Perform research individually in a topic of your interest!
            If requested, you can get support from the Team Lead in your topic.`
        },
        {
            title: 'Team Research',
            text: `Apply for a position in a team of 4-7 other students! Your Team Lead will help 
            the team choose and plan out a project.`
        },
        
    ])
  return (
    <div>
      <section>
        <div className="container">
            <h1></h1>
            <div className="cards">
                {
                    cards.map((card, i) => (
                    <div key={i} className="card">
                     <h3 className="font-bold text-l">
                        { card.title }
                     </h3>
                     <p className="text-sm">
                        { card.text }
    
                     </p>
                    </div>
                    ))
                }
            </div>
        </div>
      </section>
    </div>
  )
}

export default Card
