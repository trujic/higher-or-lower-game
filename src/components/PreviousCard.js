import React from 'react'

function PreviousCard(props) {
  if (props.cards !== [])
  return(
    <div className="previously-guessed">
        <h1>Previously guessed</h1>
        {props.previousCard.map(card => {
          return(
            <div key={card.value} className="previous-card">
              <img  className="image" src={card.image} alt={card.image}/>
            </div>
          )
        })}
    </div>
  )
}

export default PreviousCard
