import React from 'react'

function GameButtons(props) {
  return (
    <div className="higher-lower">
      <button className="game-buttons" onClick={() => props.checkHigher()}>Higher</button>
      <button className="game-buttons" onClick={() => props.checkLower()}>Lower</button>
    </div>
  )
}

export default GameButtons
