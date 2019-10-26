import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='#'>ボタン</a>
        <form>
          <label>名前</label>
          <input type="text" />
        </form>
        <input type='button' value='ボタン' />
        <input type='checkbox' />
        <input type='file' />
      </header>
    </div>
  )
}

export default App
