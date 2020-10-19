import React from 'react'

function NewGame(props) {
  return (
    <div className="new-game">
      <button className="game-buttons" onClick={props.newGame}>New Game</button>
    </div>
  )
}

export default NewGame
