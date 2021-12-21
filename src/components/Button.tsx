import React from 'react';
import styled from 'styled-components'

type ButtonProps = {
    primary?: boolean
    outlined?: boolean
    color?: string
    children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  width: 200px;
  font-size: 18px;
  cursor: pointer;
  color: ${props => props.color || props.theme.colors.primary};

  &:focus {
    outline: none;
  }
    background: transparent;
  
`



const SearchButton = (props: ButtonProps) => {
    return <StyledButton {...props}/>
};

export default SearchButton;
