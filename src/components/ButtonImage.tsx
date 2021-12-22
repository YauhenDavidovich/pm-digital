import React from 'react';
import styled from 'styled-components'

type ButtonProps = {
    img?: string
    children?: React.ReactNode;
    width?:string
    height?:string
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.color || props.theme.colors.primary};
  width: ${props => props.width || "190px"};
  height: ${props => props.height || "61px"};
  &:focus {
    outline: none;
  }
`

function myfunction() {
    console.log("go to app");
}

const ButtonImage = (props: ButtonProps) => {
    return <StyledButton {...props}><img src={props.img} alt="button_img" onClick={myfunction} /></StyledButton>
};

export default ButtonImage;
