// 1) Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom/client'

// 2) Get a reference to the div with ID root
const el = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el)

// 4) Create a component, props as variables
function App() {
  return (
    <div>
      <textarea autoFocus={true} spellCheck={false} style={{ backgroundColor: 'lightgray' }} />
      <hr />
      <input style={{ border: '1px solid blue' }} maxLength={5} placeholder='hi there' />
    </div>
  )
}

// 5) Show the component on the screen
root.render(<App />)
