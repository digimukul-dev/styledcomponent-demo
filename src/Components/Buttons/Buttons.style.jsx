import styled from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid #C6A874;
  background-color: ${(props) =>
    props.variant === 'outline' ? '#FFFFFF' : '#0D0D0F'};
  color: ${(props) =>
    props.variant === 'outline' ? '#0D0D0F' : '#FFFFFF'};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'outline' ? '#0D0D0F' : '#FFFFFF'};
    color: ${(props) =>
      props.variant === 'outline' ? '#FFFFFF' : '#0D0D0F'};
  }
`;
