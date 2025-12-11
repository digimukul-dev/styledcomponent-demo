import styled , {keyframes} from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #C6A874;
  background-color: ${(props) =>
    props.variant === 'outline' ? '#FFFFFF' : '#0D0D0F'};
  color: ${(props) =>
    props.variant === 'outline' ? '#0D0D0F' : '#FFFFFF'};
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'outline' ? '#0D0D0F' : '#FFFFFF'};
    color: ${(props) =>
      props.variant === 'outline' ? '#FFFFFF' : '#0D0D0F'};
    border: 2px solid #C6A874;
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
  color: #0D0D0F;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.20);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  }
`;
export const SubmitButton = styled(StyledButton).attrs({ type: 'submit' })`
  box-shadow: 0 9px #999; /* FIXED: Added 'px' unit */
  
  &:active{
    /* FIXED: Corrected 'propes' to 'props' */
    background-color: ${(props) => props.variant !== 'outline' ? '#FFFFFF' : '#4caf50'};
    box-shadow: 0 5px rgba(0, 0, 0, 0.5);
    transform: translateY(5px);
  }
`;
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
`;
export const DynamicThemeButton = styled(StyledButton)`
    border: 2px solid ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    
    &:hover {
        /* Swap colors on hover to use the secondary/inverted theme colors */
        border: 2px solid ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.text};
        color: ${(props) => props.theme.primary};
    }
`;