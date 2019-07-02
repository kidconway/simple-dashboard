import React, { useState } from 'react';
import Joke from './joke'
import Stories from './stories'

function App() {
  const [ userQuery, setUserQuery ] = useState('')

  const updateUserQuery = event => {
    console.log('userQuery', userQuery)
    setUserQuery(event.target.value)
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
        <input value={ userQuery } onChange={ updateUserQuery } onKeyPress={ handleKeyPress } type="text" />
        <button onClick={ searchQuery }>Search</button>
      </div>
      <hr />
      <Joke />
      <hr/>
      <Stories />
    </div>
  )
}
export default App;
