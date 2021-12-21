import React from 'react';
import styled from 'styled-components'

type StyledTitleProps = {
    color?: string
    fontSize?: string
    children: React.ReactNode;
}


const StyledTitle = styled.h1<StyledTitleProps>`
  color: ${props => props.color || props.theme.colors.primary};
  font-size: ${props => props.fontSize || '18px'};
  font-weight: 500;
  text-transform: uppercase;
  @media ${props => props.theme.media.phone} {
    font-size: 14px;
  }
`

const Title = (props: StyledTitleProps) => {
    return <StyledTitle {...props}/>

};

export default Title;
