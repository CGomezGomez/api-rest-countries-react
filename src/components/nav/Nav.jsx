
import { StyledContainer, StyledDiv, StyledH1 } from "./styles"

const Nav  = ({ darkMode, toggleDarkMode }) => {

    return (

       
        <StyledContainer className={darkMode ? 'dark' : ''}>
            <StyledH1>Where in the world?</StyledH1>
    
            <StyledDiv>
                <img src="/moon-icon.png" alt="moon" onClick={toggleDarkMode}/> 
                <p>Dark Mode</p>
            </StyledDiv>
        </StyledContainer>
       
        
    )
}

export default Nav;