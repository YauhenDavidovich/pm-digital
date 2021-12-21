import React from 'react';
import styled from 'styled-components'

type StyledNavElementProps = {
    display?: string
    children: React.ReactNode;
    displayHide?: boolean
    alignSelfEnd?: boolean
}

const StyledNavElement = styled.div<StyledNavElementProps>`  
  display: ${props => props.display || 'flex'};
  justify-content: center;
  align-items: center;  
  
  @media ${props => props.theme.media.phone} {
    display: ${props => props.displayHide && "none"};
    align-self: ${props => props.alignSelfEnd && "flex-end"};    
  }
`
const NavBarElement = (props: StyledNavElementProps) => {
    return <StyledNavElement {...props}/>;
};

export default NavBarElement

