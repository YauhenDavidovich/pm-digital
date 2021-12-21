import React from 'react';
import styled from 'styled-components'

type ButtonProps = {
    primary?: boolean
    outlined?: boolean
    color?: string
    children: React.ReactNode;
    background?:string
    width?:string
    height?:string
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  color: ${props => props.color || props.theme.colors.primary};
  width: ${props => props.width || "200px"};
  height: ${props => props.height || "48px"};
  background-color: ${props => props.background || 'transparent'};
  &:focus {
    outline: none;
  }
`


const SearchButton = (props: ButtonProps) => {
    return <StyledButton {...props}/>
};

export default SearchButton;
