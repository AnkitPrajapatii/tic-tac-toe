import React from 'react'
import "./Scoreboard.css"

const scoreBoard = ({scores,xturn}) => {

  const{oScores,xScores} = scores;

  
  return (
    <div className='scoreboard'>
      <span className={`score x-score ${!xturn && "inactive"}`}> X - {xScores}</span>
      <span className={`score o-score ${ xturn && "inactive"}`}> O - {oScores}</span>
    </div>
  )
}

export default scoreBoard
