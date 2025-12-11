import { useState } from 'react'
import react from './assets/react.svg'
import StyledButton, { FancyButton , SubmitButton } from './Components/Buttons/Button'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <img src={react} className='logo' alt='logo'/>
    <br/>
      <StyledButton type="submit">Styled Component</StyledButton>
      <div>
        <br/>
      </div>
        <StyledButton variant='outline'>Styled Component</StyledButton>
        <div>
        <br/>
      </div>
        <FancyButton>Fancy Button</FancyButton>
        <div><br/></div>
        <SubmitButton>Submit</SubmitButton>
    </>
  )
}

export default App
