import { useState } from 'react'
import StyledButton from './Components/Buttons/Button'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <StyledButton>Styled Component</StyledButton>
      <div>
        <br/>
      </div>
        <StyledButton variant='outline'>Styled Component</StyledButton>
    </>
  )
}

export default App
