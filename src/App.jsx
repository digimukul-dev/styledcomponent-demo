import { useState } from 'react'
import { ThemeProvider , createGlobalStyle} from 'styled-components'
import react from './assets/react.svg'
import StyledButton, { FancyButton , SubmitButton } from './Components/Buttons/Button'
import './App.css'
import { AnimatedLogo, DarkButton } from './Components/Buttons/Buttons.style'
function App() {
  // const [count, setCount] = useState(0)
const theme = {
  dark: {
    primary:'#000',
    text:'#fff',
  },
  light: {
    primary:'#ffffff',
    text:'#000',
  },
  fontFamily:'Segoe UI',
}
const GlobalStyles = createGlobalStyle`
  button{
    font-family: ${(props) => props.theme.fontFamily};
  }
`
  return (
    <ThemeProvider theme={theme}>  
   <>
   <GlobalStyles />
    <AnimatedLogo src={react} />
    {/* <img src={react} className='logo' alt='logo'/> */}
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
        <SubmitButton>Submit</SubmitButton><br/>
        <DarkButton>Dark Button</DarkButton>
    </>
    </ThemeProvider>
  )
}

export default App
