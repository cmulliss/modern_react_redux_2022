import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode>{<App />}</React.StrictMode>)

// using props system to get other components in here
// faker.image.avatar need to be faker.image.image instead
