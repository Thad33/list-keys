import { useState } from 'react'
import './App.css'
import Rimp from './Rimp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Rimp />
    </div>
  )
}

export default App
