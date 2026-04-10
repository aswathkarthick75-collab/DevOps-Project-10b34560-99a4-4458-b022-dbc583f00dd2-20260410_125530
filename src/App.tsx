import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>DevOps-Project-10b34560-99a4-4458-b022-dbc583f00dd2</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}