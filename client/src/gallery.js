import React, { useState } from 'react'
import PICTURES from './data/pictures'
import { useDynamicTransition } from './hooks'

const SECONDS = 1000
const minDelay = 1 * SECONDS
const minIncrement = 1

function Gallery(){
  const [ delay, setDelay ] = useState(3 * SECONDS)
  const [ increment, setIncrement ] = useState(1)

  const idx = useDynamicTransition({
    delay, increment, length: PICTURES.length
  })

  const updateDelay = event => {
    const delay = Number(event.target.value) * SECONDS
    setDelay(delay < minDelay ? minDelay : delay)
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value)
    setIncrement( increment < minIncrement ? minIncrement : increment )
  }

  return (
    <div className="Gallery">
      <h3>Here's some pictures of Octopuses</h3>
      <img
        src={ PICTURES[idx].image }
        alt="gallery"/>
        <div className="multiform">
          <div>
            Gallery transition delay (seconds)
            <input type="number" onChange={ updateDelay } />
          </div>
          <div>
            Gallery increment:
            <input type="number" onChange={ updateIncrement }/>
          </div>
        </div>
    </div>
  )
}

export default Gallery
