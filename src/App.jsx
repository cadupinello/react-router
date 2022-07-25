import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'

// Components
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  )
}

export default App
