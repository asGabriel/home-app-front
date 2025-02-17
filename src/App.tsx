import { useState } from 'react'
import './App.css'
import { Button } from 'antd'
import { HmRouteProvider } from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HmRouteProvider/>
    </>
  )
}

export default App
