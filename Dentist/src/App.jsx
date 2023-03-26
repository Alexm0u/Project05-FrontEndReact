import { useState } from 'react';
import React from 'react';
import Background from './img/background.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={Background} alt="background" className="background" />
      
    </div>
  )
}

export default App
