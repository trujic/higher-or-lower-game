import React from 'react'

function Coins(props) {
  return(
    <div className="coins">
      <h1>Coins: </h1>
      <h1>{props.coins}</h1>
    </div>
  )
}

export default Coins
