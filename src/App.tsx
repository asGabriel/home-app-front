import { useState } from 'react'
import './App.css'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button type="primary">Button</Button>
    </>
  )
}

export default App
