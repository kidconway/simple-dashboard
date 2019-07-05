import React, { useState } from 'react';
import Joke from './joke'
import Stories from './stories'
import Tasks from './tasks'
import Gallery from './gallery'
import Matrix from './matrix'

function App() {
  const [ userQuery, setUserQuery ] = useState('')
  const [ showGallery, setShowGallery  ] = useState(true)

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
    console.log('userQuery', userQuery)
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter'){
      searchQuery()
    }
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
  }

  return (
    <div className="app">
      <h1>Hello Crandall</h1>
      <div className="form">
        <input type="text"
          value={ userQuery }
          onChange={ updateUserQuery }
          onKeyPress={ handleKeyPress }  />
        <button onClick={ searchQuery }>Search</button>
        {
          userQuery
        }
      </div>
      <hr />
      <Joke />
      <hr/>
      <Tasks />
      <hr/>
      <div>
      {
        showGallery ? <Gallery /> : null
      }
      <button onClick={ toggleShowGallery} >{ showGallery ? 'Hide' : 'Show' } Gallery</button>
      </div>

      <hr/>
      <Stories />
      <hr/>
      <Matrix />
    </div>
  )
}
export default App;
