import { useState } from 'react'
import { ThemeProvider , createGlobalStyle, css } from 'styled-components' // Added 'css' import (good practice)
import react from './assets/react.svg'
import StyledButton, { FancyButton , SubmitButton } from './Components/Buttons/Button' // Assuming these are correct imports
import './App.css'
import { AnimatedLogo, DynamicThemeButton } from './Components/Buttons/Buttons.style'
function App() {
    // 1. STATE MANAGEMENT: Track the current theme mode
    const [themeMode, setThemeMode] = useState('light'); // Start with 'light' theme

    // 2. THEME OBJECT: Define the theme configuration
    const theme = {
        dark: {
            primary:'#000',
            text:'#fff',
            // Add a dedicated background color for the overall app background
            appBackground: '#1c1c1c', 
        },
        light: {
            primary:'#ffffff',
            text:'#000',
            appBackground: '#f0f0f0', 
        },
        fontFamily:'Segoe UI',
    }

    // 3. LOGIC: Function to toggle the theme mode
    const toggleTheme = () => {
        setThemeMode(themeMode === 'light' ? 'dark' : 'light');
    };

    // 4. THEME SELECTOR: Select the current theme data based on state
    const currentTheme = theme[themeMode];

    // 5. GLOBAL STYLES: Update to apply app background color
    const GlobalStyles = createGlobalStyle`
        body {
            font-family: ${(props) => props.theme.fontFamily};
            /* Apply the currently selected theme's background color */
            background-color: ${(props) => props.theme.appBackground};
            color: ${(props) => props.theme.text};
            transition: background-color 0.3s, color 0.3s;
        }
    `;

    return (
        // 6. ThemeProvider now uses the dynamic 'currentTheme' object
        <ThemeProvider theme={currentTheme}> 
            <>
                <GlobalStyles />
                
                <AnimatedLogo src={react} />
                <h2>Current Theme: **{themeMode.toUpperCase()}**</h2>

                {/* 7. THEME TOGGLE BUTTON */}
                <StyledButton onClick={toggleTheme} variant="outline">
                    Toggle to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
                </StyledButton>
                
                <br/><br/>
                <hr/>
                <h3>Component Examples:</h3>

                <StyledButton type="submit">Styled Component (Default)</StyledButton>
                <div><br/></div>
                
                <StyledButton variant='outline'>Styled Component (Outline)</StyledButton>
                <div><br/></div>
                
                <FancyButton>Fancy Button</FancyButton>
                <div><br/></div>
                
                <SubmitButton>Submit</SubmitButton><br/>
                
                {/* DarkButton now uses the dynamic theme colors */}
                <DynamicThemeButton>Dynamic Theme Button</DynamicThemeButton> 
            </>
        </ThemeProvider>
    )
}

export default App