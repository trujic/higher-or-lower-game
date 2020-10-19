import React from 'react'

function Answer(props) {
  if (props.answer === true) {
    return(
      <h1 className="answer">You were correct!</h1>
    )
  } else if (props.answer === false) {
    return (
      <h1 className="answer">You were wrong! Better luck next time</h1>
    )
  } else {
    return(
      <div>

      </div>
    )
  }
}

export default Answer
