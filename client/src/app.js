import React, { useState } from 'react';
import Joke from './joke'
import Stories from './stories'
import Tasks from './tasks'

function App() {
  const [ userQuery, setUserQuery ] = useState('')

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
      <Stories />
    </div>
  )
}
export default App;
