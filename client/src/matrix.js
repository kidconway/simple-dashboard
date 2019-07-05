import React, { useState } from 'react'
import MATRIX_FRAMES from './data/matrix'
import { useDynamicTransition } from './hooks'

const minDelay = 10
const minIncrement = 1

function Matrix(){
  const [ delay, setDelay ] = useState(100)
  const [ increment, setIncrement ] = useState(3)

  const idx = useDynamicTransition({
    delay, increment, length: MATRIX_FRAMES.length
  })

  const updateDelay = event => {
    const delay = Number(event.target.value)
    setDelay(delay < minDelay ? minDelay : delay)
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value)
    setIncrement(increment < minIncrement ? minIncrement : increment)
  }

  return (
    <div className="Matrix">
      <img src={ MATRIX_FRAMES[idx] } alt="matrix-animation"/>
      <div className="multiform">
        <div>
          Frame transition delay (seconds):
          <input type="number" onChange={ updateDelay }/>
        </div>
        <div>
          Frame increment:
          <input type="number" onChange={ updateIncrement }/>
        </div>
      </div>
    </div>
  )
}

export default Matrix
