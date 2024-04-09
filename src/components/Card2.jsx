import { useState } from "react";
import React from 'react'

const Card = () => {
    const [cards] = useState([
        {
            title: 'Archive Only',
            text: `All research conducted through our organization
            must be shown in our archive. This pathway involves researching through Eclipto and searching for another journal alone.`
        },
        {
            title: 'Archive & Support',
            text: `This pathway involves carrying out research through Eclipto (therefore showing your work in our archive) and 
            searching for another journal but with Eclipto's staff support.`
        },
        {
            title: 'Archive & Journal',
            text: `TENTATIVE, SUBJECT TO CHANGE. This pathway doesn't only display your research in our archive, but also our journal. 
            This pathway is currently unavailable, as we are still setting up.`
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
