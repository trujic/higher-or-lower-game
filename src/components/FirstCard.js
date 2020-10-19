import React from 'react'

function FirstCard(props) {
  return(
    <div className="first-card">
      <h1>Current card</h1>
      <img className="image"src={props.currentCard.image} alt={props.currentCard.image}/>
    </div>
  )
}

export default FirstCard
