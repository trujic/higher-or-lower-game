import React from 'react'

function GameTitle(props) {
  return(
    <div className="start-screen">
      <h1>Higher or Lower</h1>
      <button onClick={() => props.startGame()}>Start</button>
    </div>
  )
}

export default GameTitle
