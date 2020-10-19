import React from 'react'

function Bet(props) {
  return (
    <div className="bet">
      <h1>Place a bet</h1>
      <label>
        <input type="number" placeholder="Add bet..." value={props.bet} onChange={props.handleBet}/>
      </label>
    </div>
  )
}

export default Bet
