import React from 'react'
import ReactDOM from 'react-dom/client'

import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

// using props system to get other components in here
